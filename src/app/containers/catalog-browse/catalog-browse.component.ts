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

import { Component, OnInit } from '@angular/core';
import {CatsService} from '../../services/cats.service';
import {CatCatalog, Cat} from '../../cat';

@Component({
  selector: 'app-catalog-browse',
  templateUrl: './catalog-browse.component.html',
  styleUrls: ['./catalog-browse.component.css']
})
export class CatalogBrowseComponent implements OnInit {
  public catsArray: Cat[] = [];
  constructor(private cats: CatsService) {
    this.cats.cats$.subscribe((catalogObj: CatCatalog) => {
      this.catsArray = Object.keys(catalogObj).map((k) => catalogObj[k]);
    });
  }

  ngOnInit() {
  }

}
