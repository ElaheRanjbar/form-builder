import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { BaseValidators } from '../base-validators';
export class ValidationMaxNumber extends BaseValidators {
  constructor(private max: number) { super(); }
  validate(control: AbstractControl){
    return Validators.max(this.max)(control);
  }
}