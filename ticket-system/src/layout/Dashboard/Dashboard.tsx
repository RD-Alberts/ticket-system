import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { PrimaryButton } from "../../components/PrimaryButton";
import { TicketCard } from "./components/TicketCard";
import { TicketDetails } from "./components/TicketDetails";
import { TicketFormData } from "../../components/forms/BaseTicketForm";
import { Ticket, TicketStatus } from "../../constants/ticket.type";
import { TicketModal } from "./components/TicketModal";
import { SearchBar } from "../../components/SearchBar";
import { StatusFilter } from "../../components/StatusFilter";

/**
 * The dashboard page where users can view, create, and edit their tickets.
 * Tickets are listed as cards and can be viewed or modified using modals.
 */
export const Dashboard = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      title: "Login not working",
      status: "Open",
      description: "User cannot log in with correct credentials.",
      deadline: "2025-03-31",
      assignees: ["Bob"],
    },
    {
      id: 2,
      title: "Error on dashboard",
      status: "In Progress",
      description: "JS error when loading charts.",
      deadline: "2025-03-31",
      assignees: ["Bob"],
    },
    {
      id: 3,
      title: "Error on ticket creation",
      status: "In Progress",
      description: "Form validation fails silently.",
      deadline: "2025-03-31",
      assignees: ["Alice"],
    },
    {
      id: 4,
      title: "Ticket can't be closed",
      status: "Closed",
      description: "Button is disabled even when requirements are met.",
      deadline: "2025-03-31",
      assignees: ["Charlie"],
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<TicketStatus | "All">("All");

  // Stap 1: filter op status
  const filteredTickets =
    statusFilter === "All"
      ? tickets
      : tickets.filter((t) => t.status === statusFilter);

  // Stap 2: filter op zoekterm
  const visibleTickets = filteredTickets.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /**
   * Opens the modal to create a new ticket.
   */
  const handleCreateTicket = () => {
    setSelectedTicket(null);
    setIsEditing(false);
    setModalOpen(true);
  };

  /**
   * Opens the modal to edit an existing ticket.
   * @param ticket - The ticket to edit
   */
  const handleEditTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsEditing(true);
    setModalOpen(true);
  };

  /**
   * Handles submission of the ticket form (create or update).
   * @param data - The submitted form data
   */
  const handleSubmit = (data: TicketFormData) => {
    if (isEditing && selectedTicket) {
      // Update existing ticket
      setTickets((prev) =>
        prev.map((t) => (t.id === selectedTicket.id ? { ...t, ...data } : t))
      );
    } else {
      // Create new ticket
      const newTicket: Ticket = {
        id: tickets.length + 1,
        ...data,
      };
      setTickets((prev) => [...prev, newTicket]);
    }

    // Close modal and reset state
    setModalOpen(false);
    setSelectedTicket(null);
    setIsEditing(false);
  };

  /**
   * Sets the selected ticket to show details.
   * @param ticket - The ticket to display
   */
  const handleShowDetails = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="space-y-6">
      {/* Header with action button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <PrimaryButton
          variant="primary"
          icon={PlusCircle}
          label="Create Ticket"
          onClick={handleCreateTicket}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search tickets..."
        />
        <StatusFilter selected={statusFilter} onSelect={setStatusFilter} />
      </div>

      {/* Ticket list */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {visibleTickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            title={ticket.title}
            status={ticket.status}
            onDetailsClick={() => handleShowDetails(ticket)}
          />
        ))}
      </div>

      {/* Details panel */}
      {selectedTicket && !modalOpen && (
        <TicketDetails
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onEdit={() => handleEditTicket(selectedTicket)}
        />
      )}

      {/* Modal for create/edit */}
      {modalOpen && (
        <TicketModal
          // Dynamically show "Edit Ticket" if editing, otherwise show "New Ticket"
          title={isEditing ? "Edit Ticket" : "New Ticket"}
          defaultValues={
            selectedTicket
              ? {
                  ...selectedTicket,
                  urgent: selectedTicket.urgent ?? false,
                  deadline: selectedTicket.deadline ?? "",
                  assignees: selectedTicket.assignees ?? [],
                }
              : undefined
          }
          onSubmit={handleSubmit}
          onClose={() => {
            setModalOpen(false);
            setSelectedTicket(null);
            setIsEditing(false);
          }}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};
