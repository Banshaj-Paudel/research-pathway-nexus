
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Building2 } from 'lucide-react';

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Admin Portal</h1>
          <p className="text-xl text-text-subtle">
            Select your portal type to access your dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Link 
            to="/admin/mentor/dashboard"
            className="card p-8 hover:transform hover:-translate-y-1 transition-all duration-200 text-center group"
          >
            <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-text-dark mb-2">Mentor Portal</h2>
            <p className="text-text-subtle">
              Access your mentee dashboard, manage sessions, and track progress
            </p>
          </Link>

          <Link 
            to="/admin/university/dashboard"
            className="card p-8 hover:transform hover:-translate-y-1 transition-all duration-200 text-center group"
          >
            <div className="p-4 bg-success/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-success/20 transition-colors">
              <GraduationCap className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-semibold text-text-dark mb-2">University Portal</h2>
            <p className="text-text-subtle">
              Manage scholarship programs, review applications, and track funding
            </p>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-text-subtle mb-4">Need access to a different portal type?</p>
          <button className="btn-secondary">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
