import { BaseTicketForm, TicketFormData } from "../../../components/forms/BaseTicketForm";

/**
 * Modal component for creating or editing a ticket.
 *
 * Renders a centered modal with a dynamic title, close button, and the reusable BaseTicketForm.
 *
 * @param title - The title shown in the modal header
 * @param onSubmit - Function to handle form submission
 * @param onClose - Function to close the modal
 * @param defaultValues - Optional values to prefill the form (for editing)
 * @param isEditing - If true, the modal is in edit mode
 */
type TicketModalProps = {
  title: string;
  onSubmit: (data: TicketFormData) => void;
  onClose: () => void;
  defaultValues?: TicketFormData;
  isEditing?: boolean;
};

export const TicketModal = ({
  title,
  onSubmit,
  onClose,
  defaultValues,
  isEditing = false,
}: TicketModalProps) => {
  return (
    // Modal overlay with centered content
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full shadow-lg space-y-4">
        
        {/* Modal header: dynamic title and close button */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {isEditing ? "Edit Ticket" : title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            &times;
          </button>
        </div>

        {/* Reusable form with optional default values (edit/create) */}
        <BaseTicketForm
          onSubmit={onSubmit}
          defaultValues={defaultValues}
          assigneeOptions={["Alice", "Bob", "Charlie"]}
        />
      </div>
    </div>
  );
};
