import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadComponentModel } from '../services/load-compnent.model';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, FormBuilderComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formBuilder';

  schema: LoadComponentModel.Schema = {
    fields: [
      { key: 'firstName', type: 'string', label: 'First Name', placeholder: 'John', validators: { required: true, minLength: 2 } },
      { key: 'age', type: 'number', label: 'Age', value: 18, validators: { min: 0, max: 120 } },
      { key: 'age', type: 'number', label: 'Age', value: 18, validators: { min: 0, max: 120 } },
      { key: 'age', type: 'number', label: 'Age', value: 18, validators: { min: 0, max: 120 } },
      { key: 'age', type: 'number', label: 'Age', value: 18, validators: { min: 0, max: 120 } },
      { key: 'age', type: 'number', label: 'Age', value: 18, validators: { min: 0, max: 120 } },
      { key: 'age', type: 'number', label: 'Age', value: 18, validators: { min: 0, max: 120 } },
    ],
  };


}
