
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Award, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      path: '/admin/mentor/dashboard',
      active: location.pathname === '/admin/mentor/dashboard'
    },
    { 
      icon: Users, 
      label: 'Mentees', 
      path: '/admin/mentor/mentees',
      active: location.pathname === '/admin/mentor/mentees'
    },
    { 
      icon: BookOpen, 
      label: 'Resources', 
      path: '/admin/mentor/resources',
      active: location.pathname === '/admin/mentor/resources'
    },
    { 
      icon: Award, 
      label: 'Achievements', 
      path: '/admin/mentor/achievements',
      active: location.pathname === '/admin/mentor/achievements'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/admin/mentor/settings',
      active: location.pathname === '/admin/mentor/settings'
    },
  ];

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-text-dark">Mentor Portal</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-primary text-white'
                      : 'text-text-subtle hover:bg-gray-100 hover:text-text-dark'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {!isCollapsed && (
                    <span className="ml-3">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <div className="mt-auto pt-8">
          <button className={`flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full transition-colors ${
            isCollapsed ? 'justify-center' : ''
          }`}>
            <LogOut className="h-5 w-5" />
            {!isCollapsed && (
              <span className="ml-3">Logout</span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
