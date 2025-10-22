import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { BaseValidators } from '../base-validators';
export class ValidationRequired extends BaseValidators {
  constructor() { super(); }
  validate(control: AbstractControl){
    return Validators.required(control);
  }
}