import { useForm, FieldError, DefaultValues } from "react-hook-form";
import { ReactNode } from "react";
import { FormField } from "../fields/FormField";
import { SelectField } from "../fields/SelectField";
import { TextareaField } from "../fields/TextareaField";
import { PrimaryButton } from "../PrimaryButton";
import {
  BaseFormProps,
  BaseFormData,
} from "../../interfaces/forms/BaseForm.types";

/**
 * A generic and reusable form component that renders a basic structure
 * with title, description, and status fields. It supports dynamic extension
 * via `renderExtraFields` and `children`.
 *
 * @template T - The form data shape, must extend BaseFormData
 *
 * @example
 * <BaseForm<BaseFormData>
 *   onSubmit={(data) => console.log(data)}
 *   defaultValues={{ title: '', description: '', status: 'Open' }}
 * />
 */
export const BaseForm = <T extends BaseFormData>({
  onSubmit,
  defaultValues,
  renderExtraFields,
  children,
}: BaseFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title input field */}
      <FormField
        label="Title"
        name="title"
        register={register}
        error={errors.title as FieldError}
      />

      {/* Description textarea */}
      <TextareaField
        label="Description"
        name="description"
        register={register}
        error={errors.description as FieldError}
      />

      {/* Status select dropdown */}
      <SelectField
        label="Status"
        name="status"
        options={["Open", "In Progress", "Closed"]}
        register={register}
        error={errors.status as FieldError}
      />

      {/* Optional extra fields rendered via function */}
      {renderExtraFields && renderExtraFields({ register, errors })}

      {/* Optional additional children */}
      {children}

      {/* Submit button */}
      <PrimaryButton variant="success" label="Submit" type="submit" />
    </form>
  );
};
