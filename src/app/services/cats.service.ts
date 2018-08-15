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

import { Injectable } from '@angular/core';
import {Cat, InitialCatData, CatCatalog} from '../cat';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  // Revise type to always return most recent item to new subscribers. Replay.
  private catsSource = new BehaviorSubject<CatCatalog>({});
  public cats$ = this.catsSource.asObservable();
  constructor() {
    this.initializeData();
  }
  // If data exists in local storage, load that. Otherwise, load default data.
  initializeData() {
    if (!localStorage.getItem('catalog')) {
      localStorage.setItem('catalog', JSON.stringify(InitialCatData))
    }
    this.catsSource.next(this.getCats());
  }
  private getCats(): CatCatalog {
    return JSON.parse(localStorage.getItem('catalog'));
  }

  addCat(cat: Cat) {
    let cats = this.getCats();
    const key = Object.keys(cats).length + 1;
    cats[key] = cat;
    localStorage.setItem('catalog', JSON.stringify(cats));
    this.catsSource.next(cats);
  }
}
