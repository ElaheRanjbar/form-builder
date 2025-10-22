import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { BaseValidators } from '../base-validators';
export class ValidationMinNumber extends BaseValidators {
  constructor(private min: number) { super(); }
  validate(control: AbstractControl){
    return Validators.min(this.min)(control);
  }
}