import { BaseForm } from "./BaseForm";
import { FieldError, useForm } from "react-hook-form";
import { ReactNode } from "react";
import { CheckboxField } from "../fields/CheckboxField";
import { DateField } from "../fields/DateField";
import { MultiSelectField } from "../fields/MultiSelectField";
import { BaseFormData } from "../../interfaces/forms/BaseForm.types";

export type TicketFormData = BaseFormData & {
  urgent: boolean;
  deadline: string;
  assignees: string[];
};

type BaseTicketFormProps = {
  onSubmit: (data: TicketFormData) => void;
  defaultValues?: Partial<TicketFormData>;
  assigneeOptions: string[];
  children?: ReactNode;
};

export const BaseTicketForm = ({
  onSubmit,
  defaultValues,
  assigneeOptions,
  children,
}: BaseTicketFormProps) => {
  const {
    formState: { errors },
  } = useForm<TicketFormData>({
    defaultValues: defaultValues || {
      title: "",
      description: "",
      status: "Open",
      urgent: false,
      deadline: "",
      assignees: [],
    },
  });

  return (
    <BaseForm<TicketFormData>
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      renderExtraFields={({ register, errors }) => (
        <>
          <CheckboxField
            label="Mark as urgent"
            name="urgent"
            register={register}
            error={errors.urgent}
          />

          <DateField
            label="Deadline"
            name="deadline"
            register={register}
            error={errors.deadline}
          />

          <MultiSelectField
            label="Assign to"
            name="assignees"
            options={assigneeOptions}
            register={register}
            error={
              Array.isArray(errors.assignees)
                ? errors.assignees[0] // of undefined
                : (errors.assignees as FieldError)
            }
          />
        </>
      )}
    >
      {children}
    </BaseForm>
  );
};
