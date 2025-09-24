import { Component, Injector, Input, NO_ERRORS_SCHEMA, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { LoadComponentModel } from '../../services/load-compnent.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'form-builder',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {
  title = 'formBuilder';
  form!: FormGroup;
  @Input() schema!: LoadComponentModel.Schema;


  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private dfs: DynamicFormService, private injector: Injector) { }
  ngOnInit() {
    this.dfs.buildAndRender(this.container, this.injector, this.schema).then(({ form }) => {
      this.form = form;
    });
  }
}
