import { ticketStatusOptions, TicketStatus } from "../constants/ticket.type";

type StatusFilterProps = {
    selected: TicketStatus | "All";
    onSelect: (status: TicketStatus | "All") => void;
  };
  
  export const StatusFilter = ({ selected, onSelect }: StatusFilterProps) => {
    const allOptions: (TicketStatus | "All")[] = ["All", ...ticketStatusOptions];
  
    return (
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value as TicketStatus | "All")}
        className="px-3 py-2 border rounded text-sm"
      >
        {allOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    );
  };