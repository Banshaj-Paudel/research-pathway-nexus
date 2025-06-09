"use client";

import { useState } from 'react';
import { Search, Filter, FileText, Check, X, Clock, User, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const ApplicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [expandedApp, setExpandedApp] = useState<number | null>(null);

  const applications = [
    {
      id: 1,
      applicantName: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      program: 'Computer Science',
      degree: 'Masters',
      status: 'pending',
      appliedDate: '2024-05-15',
      documents: ['Transcripts', 'Recommendation Letters', 'SOP'],
      notes: 'Strong academic background with relevant work experience.'
    },
    {
      id: 2,
      applicantName: 'Sarah Williams',
      email: 'sarah.w@example.com',
      program: 'Business Administration',
      degree: 'MBA',
      status: 'reviewed',
      appliedDate: '2024-05-10',
      documents: ['Transcripts', 'Resume', 'Recommendation Letters'],
      notes: 'Impressive leadership experience in previous roles.'
    },
    {
      id: 3,
      applicantName: 'Michael Chen',
      email: 'michael.chen@example.com',
      program: 'Data Science',
      degree: 'PhD',
      status: 'accepted',
      appliedDate: '2024-05-05',
      documents: ['Research Paper', 'Transcripts', 'CV'],
      notes: 'Published research in top-tier conferences.'
    },
    {
      id: 4,
      applicantName: 'Emily Davis',
      email: 'emily.d@example.com',
      program: 'Psychology',
      degree: 'Bachelors',
      status: 'rejected',
      appliedDate: '2024-05-01',
      documents: ['Personal Statement', 'Transcripts'],
      notes: 'Missing prerequisite courses.'
    },
  ];

  const filteredApplications = applications
    .filter(app => {
      const matchesSearch = app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.program.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime();
      } else {
        return new Date(a.appliedDate).getTime() - new Date(b.appliedDate).getTime();
      }
    });

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'pending':
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Pending</span>;
      case 'reviewed':
        return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Under Review</span>;
      case 'accepted':
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>Accepted</span>;
      case 'rejected':
        return <span className={`${baseClasses} bg-red-100 text-red-800`}>Rejected</span>;
      default:
        return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedApp(expandedApp === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
          <p className="text-gray-500">Review and manage student applications</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          Export Applications
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Under Review</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Program
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((app) => (
                <>
                  <tr 
                    key={app.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleExpand(app.id)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <User className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{app.applicantName}</div>
                          <div className="text-sm text-gray-500">{app.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.program}</div>
                      <div className="text-sm text-gray-500">{app.degree}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(app.appliedDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(app.appliedDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        className="text-primary hover:text-primary/80 mr-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(app.id);
                        }}
                      >
                        {expandedApp === app.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </td>
                  </tr>
                  {expandedApp === app.id && (
                    <tr className="bg-gray-50">
                      <td colSpan={5} className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Documents</h4>
                            <ul className="space-y-2">
                              {app.documents.map((doc, idx) => (
                                <li key={idx} className="flex items-center">
                                  <FileText className="h-4 w-4 text-gray-400 mr-2" />
                                  <span className="text-sm text-gray-700">{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
                            <p className="text-sm text-gray-600">{app.notes}</p>
                            
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="font-medium text-gray-900 mb-2">Update Status</h4>
                              <div className="flex space-x-2">
                                <button 
                                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md hover:bg-green-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle accept
                                  }}
                                >
                                  Accept
                                </button>
                                <button 
                                  className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-md hover:bg-red-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle reject
                                  }}
                                >
                                  Reject
                                </button>
                                <button 
                                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle request more info
                                  }}
                                >
                                  Request Info
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredApplications.length}</span> of{' '}
            <span className="font-medium">{filteredApplications.length}</span> applications
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
