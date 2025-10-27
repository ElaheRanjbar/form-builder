// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export abstract class BaseValidators{
//   abstract validate(control: AbstractControl): ValidationErrors | null;
//   checkValidate(): ValidatorFn {
//     return (control: AbstractControl) => this.validate(control);
//   }
// }

import { AbstractControl, ValidationErrors } from '@angular/forms';

export type BaseValidators = (control: AbstractControl) => ValidationErrors | null;