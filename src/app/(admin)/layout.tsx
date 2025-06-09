
import Sidebar from '@/components/admin/Sidebar';
import UniversitySidebar from '@/components/admin/UniversitySidebar';
import { useLocation } from 'react-router-dom';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const isMentorRoute = location.pathname.startsWith('/admin/mentor');
  const isUniversityRoute = location.pathname.startsWith('/admin/university');

  return (
    <div className="min-h-screen flex w-full bg-bg-light">
      {isMentorRoute && <Sidebar />}
      {isUniversityRoute && <UniversitySidebar />}
      <div className={`flex-1 transition-all duration-300 ${isMentorRoute || isUniversityRoute ? 'md:ml-64' : ''}`}>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
