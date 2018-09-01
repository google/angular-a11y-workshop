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

import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('main') mainEl: ElementRef;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {}
  ngOnInit() {
    let isFirstRoute = true;
    // Watch for route changes.
    // https://toddmotto.com/dynamic-page-titles-angular-2-router-events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);

        // We don't want to trigger focus if it's the first page load. Users
        // expect keyboard focus to begin at the top of the page.
        if (!isFirstRoute) {
          this.mainEl.nativeElement.focus();
        }
        isFirstRoute = false;
      });
  }

  public getTitle() {
    return this.titleService.getTitle();
  }
}
