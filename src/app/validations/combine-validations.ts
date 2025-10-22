import { AbstractControl, ValidationErrors } from '@angular/forms';
import { BaseValidators } from './base-validators';
export namespace CombineValidations{
  export class AndValidator extends BaseValidators {
  constructor(private validators: BaseValidators[]) { super(); }

  validate(control: AbstractControl): ValidationErrors | null {
    for (const v of this.validators) {
      const err = v.validate(control);
      if (err) return err;
    }
    return null;
  }
}

export class OrValidator extends BaseValidators {
  constructor(private validators: BaseValidators[]) { super(); }

  validate(control: AbstractControl): ValidationErrors | null {
    const errors: ValidationErrors[] = [];
    for (const v of this.validators) {
      const err = v.validate(control);
      if (!err) return null;
      errors.push(err);
    }
    //return list of errors
    return Object.assign({}, ...errors);
  }
}
}