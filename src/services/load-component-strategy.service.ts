import { ComponentRef, Injectable, Injector, ViewContainerRef } from "@angular/core";

  @Injectable()
  export class LoadComponentStrategyService {
    private static components = new Map<string, () => Promise<any>>();
    static setStrategy(key: string, importer: () => Promise<any>) {
      this.components.set(key, importer);
    }
    static getStrategy(key:string) {
      return this.components.get(key);
    }
    async executeStrategy(
      container: ViewContainerRef,
      key: string,
      injector: Injector,
    ):Promise<ComponentRef<any> | undefined> {
      try {
        const loader = LoadComponentStrategyService.getStrategy(key)
        if (!loader) {
          throw new Error(`No strategy found for key: ${key}`);
        }
        const component = await loader()
        const componentRef = container.createComponent(component,{
            injector: injector
        })
        return componentRef
      } catch (e) {
        return undefined
      }    
    }
    constructor(){
      LoadComponentStrategyService.setStrategy('number',() =>
        import('../app/base-number-component/base-number-component.component').then(m => m.BaseNumberComponentComponent)
      );
      LoadComponentStrategyService.setStrategy('string',() =>
        import('../app/base-string-component/base-string-component.component').then(m => m.BaseStringComponentComponent)
      );
    }
  }
  