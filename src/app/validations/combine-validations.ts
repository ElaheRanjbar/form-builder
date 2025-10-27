import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const CombineValidations = {
  /**
   * ✅ Returns ALL validation errors combined (no short-circuit).
   */
  AndValidator: (validators: ValidatorFn[]): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const allErrors: ValidationErrors = {};

      for (const validator of validators) {
        const result = validator(control);
        if (result) {
          Object.assign(allErrors, result);
        }
      }

      // if we collected any errors, return them; otherwise null
      return Object.keys(allErrors).length ? allErrors : null;
    };
  },

  /**
   * ✅ Returns if at least one validator passes.
   * If all fail, returns the union of all errors (for debugging clarity).
   */
  OrValidator: (validators: ValidatorFn[]): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const errors: ValidationErrors[] = [];

      for (const validator of validators) {
        const result = validator(control);
        if (!result) return null; // passes if any is valid
        errors.push(result);
      }

      // all failed — combine their error objects
      return Object.assign({}, ...errors);
    };
  },
};