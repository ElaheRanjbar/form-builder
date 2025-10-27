import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadComponentModel } from '../services/load-compnent.model';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ValidationMaxLength } from './validations/validators/validation-max-length';
import { ValidationRequired } from './validations/validators/validation-required';
import { CombineValidations } from './validations/combine-validations';
import { ValidationMinLength } from './validations/validators/validation-min-length';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormBuilderComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formBuilder';

  // schema: LoadComponentModel.Schema = {
  //   fields: [
  //     { key: 'firstName', type: 'string', label: 'First Name', placeholder: 'John',
  //     validators:new CombineValidations.AndValidator(
  //       [new CombineValidations.AndValidator(
  //         [new ValidationMaxLength(8),new ValidationMinLength(4)]
  //         ),new ValidationRequired()]
  //         ) },
  //     { key: 'age', type: 'number', label: 'Age', value: 18 },
  //     { key: 'age', type: 'number', label: 'Age', value: 18 },
  //     { key: 'age', type: 'number', label: 'Age', value: 18 },
  //     { key: 'age', type: 'number', label: 'Age', value: 18 },
  //     { key: 'age', type: 'number', label: 'Age', value: 18 },
  //     { key: 'age', type: 'number', label: 'Age', value: 18 },
  //   ],
  // };
  schema: LoadComponentModel.Schema = {
    fields: [
      { key: 'firstName', type: 'string', label: 'First Name', placeholder: 'John',
      validators:CombineValidations.AndValidator([ValidationMinLength(3,'at least 3 character needed'),ValidationMaxLength(4)])},
      { key: 'age', type: 'number', label: 'Age' },
      { key: 'age', type: 'number', label: 'Age' },
      { key: 'age', type: 'number', label: 'Age' },
      { key: 'age', type: 'number', label: 'Age' },
      { key: 'age', type: 'number', label: 'Age' },
      { key: 'age', type: 'number', label: 'Age' },
    ],
  };

}
