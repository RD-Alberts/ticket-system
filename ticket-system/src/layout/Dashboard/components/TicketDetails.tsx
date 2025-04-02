import { PrimaryButton } from "../../../components/PrimaryButton";
import { Ticket } from "../../../constants/ticket.type";

/**
 * Displays the full details of a single ticket.
 *
 * Shows the ticket’s title, status, description, urgency, deadline,
 * and assignees. Includes buttons to edit or close the view.
 *
 * @param ticket - The ticket data to display
 * @param onClose - Callback to close the detail view
 * @param onEdit - Callback to open the edit form for this ticket
 */
type TicketDetailsProps = {
  ticket: Ticket;
  onClose: () => void;
  onEdit: () => void;
};

export const TicketDetails = ({
  ticket,
  onClose,
  onEdit,
}: TicketDetailsProps) => {
  return (
    <div className="mt-6 p-6 border rounded bg-white shadow space-y-2">
      {/* Header */}
      <h2 className="text-xl font-bold">Ticket Details</h2>

      {/* Ticket info */}
      <p>
        <strong>Title:</strong> {ticket.title}
      </p>
      <p>
        <strong>Status:</strong> {ticket.status}
      </p>
      <p>
        <strong>Description:</strong> {ticket.description}
      </p>

      {/* Optional fields */}
      {ticket.urgent && (
        <p>
          <strong>Urgent:</strong> ✅
        </p>
      )}
      {ticket.deadline && (
        <p>
          <strong>Deadline:</strong> {ticket.deadline}
        </p>
      )}
      {ticket.assignees && (
        <p>
          <strong>Assignees:</strong> {ticket.assignees.join(", ")}
        </p>
      )}

      {/* Action buttons */}
      <div className="flex justify-between">
        <PrimaryButton label="Edit" variant="primary" onClick={onEdit} />
        <PrimaryButton label="Close" onClick={onClose} />
      </div>
    </div>
  );
};
