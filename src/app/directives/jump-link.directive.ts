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

import {Directive, Input, HostListener} from '@angular/core';

// Performs much like a standard anchor jump link (when angular isn't present
// on the page).
@Directive({
  selector: '[jumpLink]'
})
export class JumpLinkDirective {
  @Input('jumpLink') elementId: string;
  constructor() { }

  @HostListener('click')
  onClick() {
    // Scroll to element and move focus there.
    const targetEl = document.getElementById(this.elementId);
    if (targetEl) {
      targetEl.scrollIntoView();
      targetEl.focus();
    }
  }
}
