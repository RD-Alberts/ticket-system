import { PrimaryButton } from "../../../components/PrimaryButton";
import { statusColors, TicketStatus } from "../../../constants/ticket.type";

/**
 * Card component to display a summary of a single ticket.
 *
 * Shows the title, status (with dynamic styling), and a button to view details.
 *
 * @param title - The title of the ticket
 * @param status - The current status of the ticket
 * @param onDetailsClick - Callback triggered when the "Details" button is clicked
 *
 * @example
 * <TicketCard
 *   title="Login issue"
 *   status="Open"
 *   onDetailsClick={() => handleView(ticket)}
 * />
 */
type TicketCardProps = {
  title: string;
  status: TicketStatus;
  onDetailsClick: () => void;
};

export const TicketCard = ({
  title,
  status,
  onDetailsClick,
}: TicketCardProps) => {
  // Dynamically assign color class based on status
  const statusColor = statusColors[status];

  return (
    <div className="p-4 border rounded-lg shadow bg-white space-y-3">
      {/* Ticket title */}
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="flex justify-between items-center">
        {/* Status badge with dynamic color */}
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}
        >
          {status}
        </span>

        {/* Button to trigger details view */}
        <PrimaryButton
          label="Details"
          variant="primary"
          onClick={onDetailsClick}
        />
      </div>
    </div>
  );
};
