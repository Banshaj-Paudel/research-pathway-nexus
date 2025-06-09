import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText,
  Users,
  Award,
  BarChart2,
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

const UniversitySidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      path: '/admin/university/dashboard',
      active: location.pathname === '/admin/university/dashboard'
    },
    { 
      icon: FileText, 
      label: 'Applications', 
      path: '/admin/university/applications',
      active: location.pathname === '/admin/university/applications'
    },
    { 
      icon: Award, 
      label: 'Scholarships', 
      path: '/admin/university/scholarships',
      active: location.pathname === '/admin/university/scholarships'
    },
    { 
      icon: Users, 
      label: 'Students', 
      path: '/admin/university/students',
      active: location.pathname === '/admin/university/students'
    },
    { 
      icon: BarChart2, 
      label: 'Reports', 
      path: '/admin/university/reports',
      active: location.pathname === '/admin/university/reports'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/admin/university/settings',
      active: location.pathname === '/admin/university/settings'
    },
  ];

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-full ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-text-dark">University Portal</h2>
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
      
      <nav className="p-4 flex-1">
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
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UniversitySidebar;
