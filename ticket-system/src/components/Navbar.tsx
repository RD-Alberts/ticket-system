import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center gap-2">
       <Link to="/" className="flex items-center gap-2 hover:opacity-90">
          <Ticket className="h-5 w-5" />
          <span className="text-lg font-semibold">Ticket System</span>
        </Link>
      </div>
    </nav>
  );
};
