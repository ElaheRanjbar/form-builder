import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { BaseValidators } from '../base-validators';
export class ValidationMinLength extends BaseValidators {
  constructor(private min: number) { super(); }
  validate(control: AbstractControl){
    return Validators.minLength(this.min)(control);
  }
}