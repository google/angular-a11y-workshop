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
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  catForm: FormGroup;
  // True when the user has attempted to submit the form.
  isSubmitDirty = false;
  constructor(private cats: CatsService, private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.catForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      imgUrl: [''],
      imgCredit: [''],
      description: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    this.isSubmitDirty = true;
    if (form.valid) {
      this.cats.addCat({
        name: form.value.name,
        breed: form.value.breed,
        imgUrl: form.value.imgUrl,
        imgCredit: form.value.imgCredit,
        description: form.value.description
      });
      this.router.navigate(['/catalog/add-success']);
    }
  }

  // It's useful to screen reader users to know the total number of errors.
  // See https://www.w3.org/WAI/tutorials/forms/notifications/#listing-errors
  getErrorCount(): number {
    let errorCount = 0;
    for (let controlKey in this.catForm.controls) {
      if (this.catForm.controls.hasOwnProperty(controlKey)) {
        if (this.catForm.controls[controlKey].errors) {
          errorCount += Object.keys(this.catForm.controls[controlKey].errors).length;
        }
      }
    }
    return errorCount;
  }

  // We need this method so that we can conditionally add the `aria-describedby`
  // attribute if there's an input error.
  getInputDescribedBy(inputName: string): string|null {
    // We don't show errors until user attempts to fill out the form.
    if (!this.isSubmitDirty) return null;
    // If you have multiple validations on the input, you'll have to check each
    // here.
    if (this.catForm.controls[inputName].hasError('required')) {
      return `${inputName}-error`;
    }
    // Returning null means the `aria-describedby` attribute wont be added
    // to the element.
    return null;
  }
}
