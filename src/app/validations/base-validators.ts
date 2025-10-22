import { AbstractControl, ValidationErrors } from "@angular/forms";

export abstract class BaseValidators{
  abstract validate(control: AbstractControl): ValidationErrors | null;
}