// import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
// import { BaseValidators } from '../base-validators';
// export class ValidationRequired extends BaseValidators {
//   constructor() { super(); }
//   validate(control: AbstractControl){
//     return Validators.required(control);
//   }
// }
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";
import { BaseValidators } from "../base-validators";

export function ValidationRequired (message?: string):ValidatorFn | ValidatorFn[]{ 
    return (control: AbstractControl)=>{
      const error =  Validators.required(control)
      return error ? { required: message ?? 'این فیلد الزامی است' } : null;
    }
  }