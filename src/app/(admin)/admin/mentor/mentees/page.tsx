"use client";

import { useState } from 'react';
import { Search, Filter, Plus, MessageCircle, Calendar, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenteesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedMentee, setSelectedMentee] = useState<number | null>(null);

  const mentees = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      university: "Stanford University",
      major: "Computer Science",
      year: "Senior",
      status: "Active",
      joinDate: "2024-01-15",
      lastContact: "2 days ago",
      progress: "Job Interview Prep",
      goals: ["Land FAANG internship", "Improve coding skills", "Build portfolio"],
      sessionsCompleted: 12,
      nextSession: "Today, 2:00 PM",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Kim",
      email: "sarah.kim@college.edu",
      phone: "+1 (555) 234-5678",
      university: "UC Berkeley",
      major: "Business Administration",
      year: "Junior",
      status: "Pending",
      joinDate: "2024-02-20",
      lastContact: "1 week ago",
      progress: "Resume Review",
      goals: ["Improve resume", "Network building", "Interview skills"],
      sessionsCompleted: 3,
      nextSession: "Tomorrow, 10:00 AM",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b913?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@uni.edu",
      phone: "+1 (555) 345-6789",
      university: "MIT",
      major: "Data Science",
      year: "Graduate",
      status: "Active",
      joinDate: "2023-11-10",
      lastContact: "Yesterday",
      progress: "Career Planning",
      goals: ["PhD vs Industry decision", "Research opportunities", "Career pivoting"],
      sessionsCompleted: 18,
      nextSession: "Friday, 3:30 PM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@school.edu",
      phone: "+1 (555) 456-7890",
      university: "Harvard University",
      major: "Economics",
      year: "Sophomore",
      status: "Completed",
      joinDate: "2023-09-05",
      lastContact: "2 weeks ago",
      progress: "Landed Internship!",
      goals: ["Summer internship", "GPA improvement", "Leadership roles"],
      sessionsCompleted: 25,
      nextSession: null,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "James Wilson",
      email: "james.wilson@university.edu",
      phone: "+1 (555) 567-8901",
      university: "Carnegie Mellon",
      major: "Electrical Engineering",
      year: "Senior",
      status: "Active",
      joinDate: "2024-03-01",
      lastContact: "3 days ago",
      progress: "Technical Skills Development",
      goals: ["Hardware design", "Circuit analysis", "Industry transition"],
      sessionsCompleted: 8,
      nextSession: "Monday, 1:00 PM",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const filteredMentees = mentees.filter(mentee => {
    const matchesSearch = mentee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentee.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentee.major.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || mentee.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Mentees</h1>
          <p className="text-gray-600">Manage and track your mentoring relationships</p>
        </div>
        <Link to="/admin/mentor/mentees/new" className="btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Mentee
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search mentees by name, university, or major..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            
            <button className="btn-secondary flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>

        <div className="text-gray-500">
          Showing {filteredMentees.length} of {mentees.length} mentees
        </div>
      </div>

      {/* Mentees Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredMentees.map((mentee) => (
          <div key={mentee.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={mentee.avatar} 
                  alt={mentee.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{mentee.name}</h3>
                <p className="text-sm text-gray-600">{mentee.university}</p>
                <p className="text-sm text-gray-600">{mentee.major} • {mentee.year}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                mentee.status === 'Active' ? 'bg-green-100 text-green-800' :
                mentee.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-600'
              }`}>
                {mentee.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">Last contact: {mentee.lastContact}</span>
              </div>
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-900">{mentee.progress}</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">
                  {mentee.nextSession ? `Next: ${mentee.nextSession}` : 'No upcoming sessions'}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Current Goals:</p>
              <div className="flex flex-wrap gap-1">
                {mentee.goals.slice(0, 2).map((goal, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {goal}
                  </span>
                ))}
                {mentee.goals.length > 2 && (
                  <span className="text-xs text-gray-500">+{mentee.goals.length - 2} more</span>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <Link 
                to={`/admin/mentor/mentees/${mentee.id}`}
                className="btn-primary flex-1 text-sm py-2 text-center"
              >
                View Details
              </Link>
              <button className="btn-secondary text-sm py-2 px-4">
                <MessageCircle className="h-4 w-4" />
              </button>
              <button className="btn-secondary text-sm py-2 px-4">
                <Calendar className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMentees.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">👥</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No mentees found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {mentees.filter(m => m.status === 'Active').length}
          </div>
          <p className="text-sm text-gray-600">Active Mentees</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {mentees.filter(m => m.status === 'Pending').length}
          </div>
          <p className="text-sm text-gray-600">Pending Applications</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {mentees.filter(m => m.status === 'Completed').length}
          </div>
          <p className="text-sm text-gray-600">Completed Programs</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {mentees.reduce((sum, m) => sum + m.sessionsCompleted, 0)}
          </div>
          <p className="text-sm text-gray-600">Total Sessions</p>
        </div>
      </div>
    </div>
  );
};

export default MenteesPage;
