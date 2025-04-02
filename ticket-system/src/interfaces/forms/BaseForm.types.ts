import {
    UseFormRegister,
    FieldErrors,
    FieldValues,
  } from "react-hook-form";
  import { ReactNode } from "react";
  
  /**
   * Shape of the base form data used by BaseForm.
   */
  export type BaseFormData = {
    title: string;
    description: string;
    status: "Open" | "In Progress" | "Closed";
  };
  
  /**
   * Props for the BaseForm component.
   *
   * @template T - The type of the form data, extending FieldValues
   */
  export interface BaseFormProps<T extends FieldValues> {
    /** Function to handle form submission */
    onSubmit: (data: T) => void;
  
    /** Optional default values to populate the form */
    defaultValues?: Partial<T>;
  
    /**
     * Optional render function to inject additional fields into the form.
     * Receives react-hook-form `register` and `errors` as arguments.
     */
    renderExtraFields?: (formUtils: {
      register: UseFormRegister<T>;
      errors: FieldErrors<T>;
    }) => ReactNode;
  
    /** Optional additional React children to be rendered inside the form */
    children?: ReactNode;
  }
  