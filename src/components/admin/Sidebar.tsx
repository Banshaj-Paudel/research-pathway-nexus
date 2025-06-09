
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Users, 
  FileText, 
  Settings, 
  BarChart, 
  Calendar,
  Briefcase,
  GraduationCap,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  role: 'university' | 'mentor' | 'job' | 'admin';
}

const Sidebar = ({ role }: SidebarProps) => {
  const pathname = usePathname();

  const getMenuItems = () => {
    switch (role) {
      case 'university':
        return [
          { href: '/admin/university/dashboard', label: 'Dashboard', icon: Home },
          { href: '/admin/university/scholarships', label: 'Scholarships', icon: GraduationCap },
          { href: '/admin/university/submissions', label: 'Submissions', icon: FileText },
          { href: '/admin/university/analytics', label: 'Analytics', icon: BarChart },
          { href: '/admin/university/settings', label: 'Settings', icon: Settings },
        ];
      case 'mentor':
        return [
          { href: '/admin/mentor/dashboard', label: 'Dashboard', icon: Home },
          { href: '/admin/mentor/mentees', label: 'Mentees', icon: Users },
          { href: '/admin/mentor/messages', label: 'Messages', icon: MessageSquare },
          { href: '/admin/mentor/schedule', label: 'Schedule', icon: Calendar },
          { href: '/admin/mentor/profile', label: 'Profile', icon: Settings },
        ];
      case 'job':
        return [
          { href: '/admin/job/dashboard', label: 'Dashboard', icon: Home },
          { href: '/admin/job/listings', label: 'Job Listings', icon: Briefcase },
          { href: '/admin/job/applicants', label: 'Applicants', icon: Users },
          { href: '/admin/job/analytics', label: 'Analytics', icon: BarChart },
          { href: '/admin/job/settings', label: 'Settings', icon: Settings },
        ];
      default:
        return [
          { href: '/admin/dashboard', label: 'Dashboard', icon: Home },
          { href: '/admin/opportunities', label: 'Opportunities', icon: FileText },
          { href: '/admin/users', label: 'Users', icon: Users },
          { href: '/admin/analytics', label: 'Analytics', icon: BarChart },
          { href: '/admin/settings', label: 'Settings', icon: Settings },
        ];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-white shadow-lg h-screen sticky top-0">
      <div className="p-6 border-b border-border-light">
        <Link href="/" className="text-xl font-bold text-primary">
          Research Shock
        </Link>
        <p className="text-text-subtle text-sm mt-1 capitalize">{role} Dashboard</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 text-sm transition-colors ${
                isActive 
                  ? 'bg-primary/10 text-primary border-r-2 border-primary' 
                  : 'text-text-subtle hover:text-text-dark hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
