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
      controls[field.key] = new FormControl(field.value ?? null, {
        validators: this.buildValidators(field),
      });
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

  private buildValidators(field: LoadComponentModel.Field): ValidatorFn[] {
    const v: ValidatorFn[] = [];
    const opts = field.validators ?? {};

    if (opts.required) v.push(Validators.required);

    // Numeric validators
    if (typeof opts.min === 'number') v.push(Validators.min(opts.min));
    if (typeof opts.max === 'number') v.push(Validators.max(opts.max));

    // String validators
    if (typeof opts.minLength === 'number') v.push(Validators.minLength(opts.minLength));
    if (typeof opts.maxLength === 'number') v.push(Validators.maxLength(opts.maxLength));
    if (opts.pattern) v.push(Validators.pattern(opts.pattern));
    return v;
  }
}
