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
import {Cat} from '../../cat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public randomCat: Cat;
  constructor(private cats: CatsService) { }

  ngOnInit() {
    this.cats.cats$.subscribe((cats) => {
      const keys = Object.keys(cats);
      const randomKey = keys.length * Math.random() << 0;
      this.randomCat = cats[keys[randomKey]];
    });
  }

}
