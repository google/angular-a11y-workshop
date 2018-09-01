/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Component, OnInit, HostListener, Inject
} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {map, filter} from 'rxjs/internal/operators';
import {DOCUMENT} from '@angular/common';

const BREAKPOINT = 600;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isCatalogShown = false;
  public isNavShown = false;
  private activeUrl = '';
  private isSmallViewport = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .subscribe((activatedRoute) => {
        this.activeUrl = activatedRoute.snapshot['_routerState'].url;

        // Close the navigation on mobile when a link is clicked.
        if (this.isSmallViewport) {
          this.isNavShown = false;
        }
        // Close the catalog sub-menu.
        this.isCatalogShown = false;
      });
    this.setNavShown(this.document.body.clientWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.setNavShown(event.target.innerWidth);
  }

  private setNavShown(width: number) {
    // Force navigation to always be accessible on larger viewports.
    if (width >= BREAKPOINT) {
      this.isSmallViewport = false;
      this.isNavShown = true;
    } else {
      this.isSmallViewport = true;
    }
  }

  // Mark the element as current page if it matches the current route.
  // Note that this spoken feedback does not work with the
  // Chromevox Chrome Extension but works with
  // Android Talkback, JAWS and NVDA.
  getDescribedBy(element: HTMLInputElement): string|null {
    return (this.activeUrl == element.getAttribute('routerLink')) ?
        // If null, the attribute won't be added. We don't want the attribute
        // there without a value because that's invalid.
        'current-page' : null;
  }
}
