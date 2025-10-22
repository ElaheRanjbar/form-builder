import { AbstractControl, Validators } from '@angular/forms';
import { BaseValidators } from '../base-validators';
export class ValidationPattern extends BaseValidators {
  constructor(private pattern:string|RegExp) { super(); }
  validate(control: AbstractControl){
    return Validators.pattern(this.pattern)(control);
  }
}