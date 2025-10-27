// import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
// import { BaseValidators } from '../base-validators';
// export class ValidationMinLength extends BaseValidators {
//   constructor(private min: number) { super(); }
//   validate(control: AbstractControl){
//     return Validators.minLength(this.min)(control);
//   }
// }
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";
import { BaseValidators } from "../base-validators";

export function ValidationMinLength (min:number,message?:string):ValidatorFn{ 
    return (control: AbstractControl)=>{
      const error = Validators.minLength(min)(control)
      return error ? { required: message ?? `این فیلد حداقل شامل مقدار ${min} کاراکتر است` } : null;
    }
  }