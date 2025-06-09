
import Sidebar from '@/components/admin/Sidebar';
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
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
