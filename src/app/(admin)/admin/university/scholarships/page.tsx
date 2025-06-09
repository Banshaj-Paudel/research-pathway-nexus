"use client";

import { useState } from 'react';
import { Search, Plus, Award, DollarSign, Calendar, Users, Edit, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

const ScholarshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [expandedScholarship, setExpandedScholarship] = useState<number | null>(null);

  const scholarships = [
    {
      id: 1,
      name: 'Academic Excellence Scholarship',
      description: 'Awarded to students with outstanding academic achievements.',
      amount: 10000,
      deadline: '2024-08-15',
      status: 'active',
      available: 15,
      awarded: 5,
      requirements: [
        'Minimum GPA of 3.8',
        'Letter of recommendation',
        'Personal statement',
        'Proof of academic achievements'
      ]
    },
    {
      id: 2,
      name: 'STEM Leadership Grant',
      description: 'For students pursuing STEM fields with demonstrated leadership potential.',
      amount: 7500,
      deadline: '2024-09-01',
      status: 'active',
      available: 10,
      awarded: 3,
      requirements: [
        'Enrolled in a STEM program',
        'Minimum GPA of 3.5',
        'Leadership experience essay',
        'Two recommendation letters'
      ]
    },
    {
      id: 3,
      name: 'Community Service Award',
      description: 'For students with significant community service involvement.',
      amount: 5000,
      deadline: '2024-07-20',
      status: 'upcoming',
      available: 20,
      awarded: 0,
      requirements: [
        'Minimum 100 hours of community service',
        'Service verification letter',
        'Personal impact statement',
        'Current enrollment verification'
      ]
    },
    {
      id: 4,
      name: 'International Student Scholarship',
      description: 'Support for outstanding international students.',
      amount: 8000,
      deadline: '2024-06-30',
      status: 'ended',
      available: 0,
      awarded: 12,
      requirements: [
        'International student status',
        'Minimum GPA of 3.7',
        'Financial need statement',
        'Two academic references'
      ]
    },
  ];

  const filteredScholarships = scholarships
    .filter(scholarship => {
      const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || scholarship.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'active':
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>Active</span>;
      case 'upcoming':
        return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Upcoming</span>;
      case 'ended':
        return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Ended</span>;
      default:
        return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedScholarship(expandedScholarship === id ? null : id);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Scholarships</h1>
          <p className="text-gray-500">Manage and track available scholarships</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Scholarship
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search scholarships..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="ended">Ended</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-4">
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                onClick={() => toggleExpand(scholarship.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{scholarship.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{scholarship.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{formatCurrency(scholarship.amount)}</div>
                    <div className="text-xs text-gray-500">Award Amount</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{scholarship.available} / {scholarship.available + scholarship.awarded}</div>
                    <div className="text-xs text-gray-500">Available / Total</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(scholarship.deadline).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-500">Deadline</div>
                  </div>
                  <div>
                    {getStatusBadge(scholarship.status)}
                  </div>
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(scholarship.id);
                    }}
                  >
                    {expandedScholarship === scholarship.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              {expandedScholarship === scholarship.id && (
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                      <ul className="space-y-2">
                        {scholarship.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-green-500">
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Statistics</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Awarded</span>
                            <span className="font-medium">{scholarship.awarded} of {scholarship.available + scholarship.awarded}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(scholarship.awarded / (scholarship.available + scholarship.awarded)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Days until deadline</span>
                            <span className="font-medium">
                              {Math.ceil((new Date(scholarship.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ 
                                width: `${Math.min(100, 100 - ((new Date(scholarship.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30) * 10))}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex space-x-3">
                        <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                          <Edit className="h-4 w-4 mr-1.5" />
                          Edit
                        </button>
                        <button className="px-3 py-1.5 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 flex items-center">
                          <Trash2 className="h-4 w-4 mr-1.5" />
                          Delete
                        </button>
                        <button className="ml-auto px-3 py-1.5 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90">
                          View Applications
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredScholarships.length}</span> of{' '}
            <span className="font-medium">{filteredScholarships.length}</span> scholarships
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

export default ScholarshipsPage;
