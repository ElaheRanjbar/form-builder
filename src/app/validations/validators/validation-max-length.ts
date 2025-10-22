import { AbstractControl, Validators } from '@angular/forms';
import { BaseValidators } from '../base-validators';
export class ValidationMaxLength extends BaseValidators {
  constructor(private max: number) { super(); }
  validate(control: AbstractControl){
    return Validators.maxLength(this.max)(control);
  }
}