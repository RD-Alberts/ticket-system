import { Link } from "react-router-dom"

export const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-600 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center border-t">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ticket System. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to='/privacy' className="hover:text-blue-500 text-sm">Privacy</Link>
            <Link to='/terms' className="hover:text-blue-500 text-sm">Terms</Link>
            <Link to='/cookies' className="hover:text-blue-500 text-sm">Cookies</Link>
            <Link to='/contact' className="hover:text-blue-500 text-sm">Contact</Link>
          </div>
        </div>
      </footer>
    );
  };
  