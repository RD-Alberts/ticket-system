/**
 * List of available ticket statuses.
 * Used for select dropdowns and type safety.
 */
export const ticketStatusOptions = ["Open", "In Progress", "Closed"] as const;

/**
 * Type representing one of the defined ticket statuses.
 * Derived from `ticketStatusOptions` for full type safety and reuse.
 */
export type TicketStatus = typeof ticketStatusOptions[number];

/**
 * Maps each ticket status to a Tailwind CSS class string for consistent styling.
 */
export const statusColors: Record<TicketStatus, string> = {
  Open: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Closed: "bg-gray-100 text-gray-700",
};

/**
 * Represents a single support or issue ticket.
 */
export type Ticket = {
  /** Unique identifier for the ticket */
  id: number;

  /** Short title or summary of the issue */
  title: string;

  /** Full description of the issue or request */
  description: string;

  /** Current status of the ticket */
  status: TicketStatus;

  /** Whether the ticket is marked as urgent (optional) */
  urgent?: boolean;

  /** Deadline date in ISO 8601 format (optional) */
  deadline?: string;

  /** List of assigned users (optional) */
  assignees?: string[];
};
