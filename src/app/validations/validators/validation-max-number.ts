// import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
// import { BaseValidators } from '../base-validators';
// export class ValidationMaxNumber extends BaseValidators {
//   constructor(private max: number) { super(); }
//   validate(control: AbstractControl){
//     return Validators.max(this.max)(control);
//   }
// }
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";
import { BaseValidators } from "../base-validators";

export function ValidationMaxNumber (max:number,message?:string):ValidatorFn{ 
    return (control: AbstractControl)=>{
      const error =  Validators.max(max)(control)
      return error ? { required: message ?? `این فیلد حداکثر شامل مقدار ${max}است` } : null;
    }
  }