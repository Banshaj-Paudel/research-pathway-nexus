
import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex w-full bg-bg-light">
      <div className="flex w-full">
        {children}
      </div>
    </div>
  );
}
