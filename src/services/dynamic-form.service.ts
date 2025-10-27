import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LoadComponentModel } from './load-compnent.model';
import { LoadComponentStrategyService } from './load-component-strategy.service';

@Injectable({ providedIn: 'root' })
export class DynamicFormService {
  constructor(
    private fb: FormBuilder,
    private loader: LoadComponentStrategyService,
  ) {}

  buildForm(schema: LoadComponentModel.Schema): FormGroup {
    const controls: Record<string, FormControl> = {};
    for (const field of schema.fields) {
      controls[field.key] = new FormControl(field.value ?? null,
        {
          validators: field.validators ?? null
        }
      );
    }
    return this.fb.group(controls);
  }

  async buildAndRender(
    container: ViewContainerRef,
    injector: Injector,
    schema: LoadComponentModel.Schema,
  ): Promise<{ form: FormGroup }> {
    const form = this.buildForm(schema);

    for (const field of schema.fields) {
      const componentRef = await this.loader.executeStrategy(container, field.type, injector);
      if (!componentRef) continue;

      const inst: any = componentRef.instance;
      inst.control = form.get(field.key) as FormControl | null;
      inst.label = field.label ?? field.key;
      inst.placeholder = field.placeholder ?? '';
      inst.name = field.key;
      if (field.componentInputs) Object.assign(inst, field.componentInputs);
      componentRef.changeDetectorRef.detectChanges();
    }
    return { form };
  }

}
