// import { AbstractControl, Validators } from '@angular/forms';
// import { BaseValidators } from '../base-validators';
// export class ValidationPattern extends BaseValidators {
//   constructor(private pattern:string|RegExp) { super(); }
//   validate(control: AbstractControl){
//     return Validators.pattern(this.pattern)(control);
//   }
// }
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";
import { BaseValidators } from "../base-validators";

export function ValidationPattern (pattern:string|RegExp,message?:string):ValidatorFn{ 
    return (control: AbstractControl)=>{
      const error = Validators.pattern(pattern)(control)
      return error ? { required: message ?? `pattern مربوط به این فیلد رعایت نشده` } : null;
    }
  }