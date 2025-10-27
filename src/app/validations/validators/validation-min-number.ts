// import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
// import { BaseValidators } from '../base-validators';
// export class ValidationMinNumber extends BaseValidators {
//   constructor(private min: number) { super(); }
//   validate(control: AbstractControl){
//     return Validators.min(this.min)(control);
//   }
// }
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";
import { BaseValidators } from "../base-validators";

export function ValidationMinNumber (min:number,message?:string):ValidatorFn{ 
    return (control: AbstractControl)=>{
      const error = Validators.min(min)(control)
      return error ? { required: message ?? `این فیلد حداقل شامل مقدار ${min} است` } : null;
    }
  }