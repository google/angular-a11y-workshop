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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './containers/home/home.component';
import { CatalogBrowseComponent } from './containers/catalog-browse/catalog-browse.component';
import { CatalogSearchComponent } from './containers/catalog-search/catalog-search.component';
import { AboutComponent } from './containers/about/about.component';
import {CommonModule} from "@angular/common";
import { JumpLinkDirective } from './directives/jump-link.directive';
import { AddCatComponent } from './containers/add-cat/add-cat.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddCatSuccessComponent } from './containers/add-cat-success/add-cat-success.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Welcome to the Cat-alog'}},
  {path: 'catalog/browse', component: CatalogBrowseComponent, data: {title: 'Here are all the cats'}},
  {path: 'catalog/search', component: CatalogSearchComponent, data: {title: 'Search the Cat-alog'}},
  {path: 'catalog/add-success', component: AddCatSuccessComponent, data: {title: 'Your cat has been saved'}},
  {path: 'catalog/add', component: AddCatComponent, data: {title: 'Add a cat'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CatalogBrowseComponent,
    CatalogSearchComponent,
    AboutComponent,
    JumpLinkDirective,
    AddCatComponent,
    AddCatSuccessComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
