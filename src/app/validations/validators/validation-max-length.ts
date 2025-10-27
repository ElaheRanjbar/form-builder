// import { AbstractControl, Validators } from '@angular/forms';
// import { BaseValidators } from '../base-validators';
// export class ValidationMaxLength extends BaseValidators {
//   constructor(private max: number) { super(); }
//   validate(control: AbstractControl){
//     return Validators.maxLength(this.max)(control);
//   }

import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { BaseValidators } from "../base-validators";

// }
export function ValidationMaxLength (max:number,message?:string):ValidatorFn{ 
    return (control: AbstractControl)=>{
      const error =  Validators.maxLength(max)(control)
      return error ? { required: message ?? `این فیلد حداکثر شامل مقدار ${max}کاراکتر است` } : null;
    }
  }