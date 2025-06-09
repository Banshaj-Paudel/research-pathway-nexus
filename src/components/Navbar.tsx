
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">Research Shock</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/scholarships" className="text-white hover:text-blue-200 transition-colors">
              Scholarships
            </Link>
            <Link to="/jobs" className="text-white hover:text-blue-200 transition-colors">
              Jobs
            </Link>
            <Link to="/mentors" className="text-white hover:text-blue-200 transition-colors">
              Mentors
            </Link>
            <Link to="/research" className="text-white hover:text-blue-200 transition-colors">
              Research
            </Link>
            <Link to="/opportunities" className="text-white hover:text-blue-200 transition-colors">
              Opportunity Hub
            </Link>
            
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-blue-200">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/admin" className="btn-secondary text-sm py-2 px-4">
                Admin Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-dark">
              <Link to="/scholarships" className="block text-white hover:text-blue-200 px-3 py-2">
                Scholarships
              </Link>
              <Link to="/jobs" className="block text-white hover:text-blue-200 px-3 py-2">
                Jobs
              </Link>
              <Link to="/mentors" className="block text-white hover:text-blue-200 px-3 py-2">
                Mentors
              </Link>
              <Link to="/research" className="block text-white hover:text-blue-200 px-3 py-2">
                Research
              </Link>
              <Link to="/opportunities" className="block text-white hover:text-blue-200 px-3 py-2">
                Opportunity Hub
              </Link>
              <Link to="/admin" className="block text-white hover:text-blue-200 px-3 py-2">
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
