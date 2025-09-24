export namespace LoadComponentModel {
  // Supported component/input types
  export type FieldType = 'string' | 'number';

  // Common options every field can have
  export interface FieldCommon {
    key: string;
    type: FieldType;
    label?: string;
    placeholder?: string;
    value?: any;
    validators?: {
      required?: boolean;
      min?: number;       
      max?: number;       
      minLength?: number; 
      maxLength?: number;
      pattern?: string;   
    };
    componentInputs?: Record<string, any>;
  }

  export interface StringField extends FieldCommon {
    type: 'string';
    value?: string;
  }

  export interface NumberField extends FieldCommon {
    type: 'number';
    value?: number;
  }

  export type Field = StringField | NumberField;

  // Full schema: a flat list of fields (extend to support groups/arrays later)
  export interface Schema {
    fields: Field[];
  }
}
