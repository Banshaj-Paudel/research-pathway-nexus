import Sidebar from '@/components/admin/Sidebar';
import DashboardCard from '@/components/admin/DashboardCard';
import { Users, MessageSquare, Clock, Star, Calendar, TrendingUp } from 'lucide-react';

const MentorDashboard = () => {
  const recentMentees = [
    { name: "Alex Johnson", status: "Active", lastContact: "2 days ago", progress: "Job Interview Prep" },
    { name: "Sarah Kim", status: "Pending", lastContact: "1 week ago", progress: "Resume Review" },
    { name: "Michael Chen", status: "Active", lastContact: "Yesterday", progress: "Career Planning" },
    { name: "Emily Rodriguez", status: "Completed", lastContact: "2 weeks ago", progress: "Landed Internship!" }
  ];

  const upcomingSessions = [
    { mentee: "Alex Johnson", date: "Today", time: "2:00 PM", topic: "Mock Interview" },
    { mentee: "Sarah Kim", date: "Tomorrow", time: "10:00 AM", topic: "Resume Review" },
    { mentee: "Michael Chen", date: "Friday", time: "3:30 PM", topic: "Career Planning" }
  ];

  return (
    <div className="flex w-full">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-dark mb-2">Welcome back, Dr. Sarah Chen</h1>
          <p className="text-text-subtle">Here's what's happening with your mentees today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Mentees"
            value="25"
            icon={<Users className="h-6 w-6 text-primary" />}
            trend={{ value: 12, isPositive: true }}
          />
          <DashboardCard
            title="Active Conversations"
            value="18"
            icon={<MessageSquare className="h-6 w-6 text-success" />}
          />
          <DashboardCard
            title="Hours This Month"
            value="42"
            subtitle="8 hours remaining"
            icon={<Clock className="h-6 w-6 text-accent" />}
          />
          <DashboardCard
            title="Average Rating"
            value="4.9"
            subtitle="Based on 23 reviews"
            icon={<Star className="h-6 w-6 text-yellow-500" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Mentees */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-text-dark">Recent Mentees</h2>
              <button className="text-primary hover:text-primary-dark text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentMentees.map((mentee, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-text-dark">{mentee.name}</h3>
                    <p className="text-sm text-text-subtle">{mentee.progress}</p>
                    <p className="text-xs text-text-subtle mt-1">Last contact: {mentee.lastContact}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      mentee.status === 'Active' ? 'bg-success/10 text-success' :
                      mentee.status === 'Pending' ? 'bg-accent/10 text-accent' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {mentee.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-text-dark">Upcoming Sessions</h2>
              <button className="text-primary hover:text-primary-dark text-sm font-medium">
                <Calendar className="h-4 w-4 inline mr-1" />
                Manage Schedule
              </button>
            </div>
            
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border-light rounded-lg">
                  <div>
                    <h3 className="font-medium text-text-dark">{session.mentee}</h3>
                    <p className="text-sm text-text-subtle">{session.topic}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-text-dark">{session.date}</p>
                    <p className="text-sm text-text-subtle">{session.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 btn-secondary">
              Schedule New Session
            </button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="card p-6 mt-8">
          <h2 className="text-xl font-semibold text-text-dark mb-6">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-2">85%</div>
              <p className="text-text-subtle text-sm">Response Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">4.2 hrs</div>
              <p className="text-text-subtle text-sm">Avg Session Length</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">92%</div>
              <p className="text-text-subtle text-sm">Goal Achievement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
