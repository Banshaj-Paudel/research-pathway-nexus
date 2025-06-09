
import Sidebar from '@/components/admin/Sidebar';
import DashboardCard from '@/components/admin/DashboardCard';
import { GraduationCap, Users, FileText, TrendingUp, Eye, CheckCircle } from 'lucide-react';

const UniversityDashboard = () => {
  const recentSubmissions = [
    { 
      name: "Emily Rodriguez", 
      scholarship: "Merit Excellence Scholarship", 
      amount: "$25,000",
      status: "Under Review", 
      submitted: "2 days ago",
      gpa: "3.89"
    },
    { 
      name: "Marcus Johnson", 
      scholarship: "STEM Innovation Grant", 
      amount: "$15,000",
      status: "Approved", 
      submitted: "1 week ago",
      gpa: "3.94"
    },
    { 
      name: "Sarah Chen", 
      scholarship: "Research Fellowship", 
      amount: "$30,000",
      status: "Pending Documents", 
      submitted: "3 days ago",
      gpa: "3.96"
    },
    { 
      name: "Alex Kim", 
      scholarship: "Community Leadership Award", 
      amount: "$10,000",
      status: "Interview Scheduled", 
      submitted: "5 days ago",
      gpa: "3.75"
    }
  ];

  const activeScholarships = [
    { name: "Merit Excellence Scholarship", applications: 156, deadline: "March 15, 2024", budget: "$500,000" },
    { name: "STEM Innovation Grant", applications: 89, deadline: "April 1, 2024", budget: "$300,000" },
    { name: "Research Fellowship", applications: 234, deadline: "February 28, 2024", budget: "$750,000" },
    { name: "Community Leadership Award", applications: 67, deadline: "May 15, 2024", budget: "$200,000" }
  ];

  return (
    <div className="flex w-full">
      <Sidebar role="university" />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-dark mb-2">Stanford University Portal</h1>
          <p className="text-text-subtle">Manage your scholarship programs and track applications.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Active Scholarships"
            value="12"
            icon={<GraduationCap className="h-6 w-6 text-primary" />}
          />
          <DashboardCard
            title="Total Applications"
            value="546"
            subtitle="This semester"
            icon={<FileText className="h-6 w-6 text-success" />}
            trend={{ value: 23, isPositive: true }}
          />
          <DashboardCard
            title="Approved Applications"
            value="89"
            subtitle="16.3% approval rate"
            icon={<CheckCircle className="h-6 w-6 text-success" />}
          />
          <DashboardCard
            title="Total Funding"
            value="$1.2M"
            subtitle="Allocated this year"
            icon={<TrendingUp className="h-6 w-6 text-accent" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Submissions */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-text-dark">Recent Submissions</h2>
              <button className="text-primary hover:text-primary-dark text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentSubmissions.map((submission, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-text-dark">{submission.name}</h3>
                    <p className="text-sm text-text-subtle">{submission.scholarship}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-text-subtle">GPA: {submission.gpa}</span>
                      <span className="text-xs text-text-subtle">{submission.submitted}</span>
                      <span className="text-xs font-medium text-accent">{submission.amount}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      submission.status === 'Approved' ? 'bg-success/10 text-success' :
                      submission.status === 'Under Review' ? 'bg-blue-100 text-blue-600' :
                      submission.status === 'Interview Scheduled' ? 'bg-accent/10 text-accent' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {submission.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Scholarships */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-text-dark">Active Scholarships</h2>
              <button className="btn-primary text-sm py-2 px-4">
                Create New
              </button>
            </div>
            
            <div className="space-y-4">
              {activeScholarships.map((scholarship, index) => (
                <div key={index} className="p-4 border border-border-light rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-text-dark">{scholarship.name}</h3>
                    <span className="text-sm font-medium text-primary">{scholarship.budget}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-text-subtle">
                    <span>{scholarship.applications} applications</span>
                    <span>Due: {scholarship.deadline}</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="btn-secondary text-xs py-1 px-3">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </button>
                    <button className="text-primary hover:text-primary-dark text-xs font-medium">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card p-6 mt-8">
          <h2 className="text-xl font-semibold text-text-dark mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="btn-primary">
              Create Scholarship
            </button>
            <button className="btn-secondary">
              Review Applications
            </button>
            <button className="btn-secondary">
              Export Reports
            </button>
            <button className="btn-secondary">
              Manage Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityDashboard;
