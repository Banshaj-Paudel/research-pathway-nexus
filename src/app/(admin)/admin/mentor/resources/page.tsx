"use client";

import { useState } from 'react';
import { Search, Filter, Plus, Download, ExternalLink, BookOpen, Video, FileText, Link as LinkIcon, Users, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const resources = [
    {
      id: 1,
      title: "Complete Guide to Technical Interviews",
      description: "Comprehensive guide covering data structures, algorithms, system design, and behavioral questions for tech interviews.",
      type: "Document",
      category: "Interview Prep",
      format: "PDF",
      size: "2.4 MB",
      downloads: 156,
      views: 432,
      dateAdded: "2024-05-15",
      url: "#",
      tags: ["Algorithms", "System Design", "Coding", "Behavioral"],
      isPublic: true
    },
    {
      id: 2,
      title: "Resume Templates for Tech Roles",
      description: "Professional resume templates specifically designed for software engineering, data science, and product management roles.",
      type: "Template",
      category: "Career Development",
      format: "DOCX",
      size: "1.2 MB",
      downloads: 89,
      views: 267,
      dateAdded: "2024-05-10",
      url: "#",
      tags: ["Resume", "Templates", "Career"],
      isPublic: true
    },
    {
      id: 3,
      title: "Mock Interview Session: Google SWE",
      description: "Recording of a mock technical interview session for Google Software Engineer position with detailed feedback.",
      type: "Video",
      category: "Interview Prep",
      format: "MP4",
      size: "145 MB",
      downloads: 234,
      views: 891,
      dateAdded: "2024-05-08",
      url: "#",
      tags: ["Mock Interview", "Google", "Software Engineering"],
      isPublic: false
    },
    {
      id: 4,
      title: "Networking Strategies for Students",
      description: "Step-by-step guide on building professional networks, leveraging LinkedIn, and making meaningful connections in your field.",
      type: "Article",
      category: "Networking",
      format: "Web",
      size: "-",
      downloads: 0,
      views: 178,
      dateAdded: "2024-05-12",
      url: "#",
      tags: ["Networking", "LinkedIn", "Professional Development"],
      isPublic: true
    },
    {
      id: 5,
      title: "Salary Negotiation Playbook",
      description: "Comprehensive guide on researching, preparing for, and executing successful salary negotiations for new graduates.",
      type: "Document",
      category: "Career Development",
      format: "PDF",
      size: "1.8 MB",
      downloads: 67,
      views: 203,
      dateAdded: "2024-05-05",
      url: "#",
      tags: ["Salary", "Negotiation", "Career Growth"],
      isPublic: true
    },
    {
      id: 6,
      title: "Data Science Portfolio Projects",
      description: "Collection of end-to-end data science projects with code, documentation, and deployment examples.",
      type: "Code Repository",
      category: "Technical Skills",
      format: "GitHub",
      size: "-",
      downloads: 45,
      views: 156,
      dateAdded: "2024-04-28",
      url: "#",
      tags: ["Data Science", "Portfolio", "Python", "Machine Learning"],
      isPublic: true
    },
    {
      id: 7,
      title: "Industry Insights: Tech Trends 2024",
      description: "Webinar recording discussing emerging technologies, market trends, and career opportunities in the tech industry.",
      type: "Video",
      category: "Industry Insights",
      format: "MP4",
      size: "89 MB",
      downloads: 123,
      views: 345,
      dateAdded: "2024-04-20",
      url: "#",
      tags: ["Tech Trends", "Industry", "Career Planning"],
      isPublic: true
    },
    {
      id: 8,
      title: "Graduate School Application Checklist",
      description: "Complete checklist for graduate school applications including timeline, requirements, and application tips.",
      type: "Checklist",
      category: "Education",
      format: "PDF",
      size: "0.5 MB",
      downloads: 78,
      views: 234,
      dateAdded: "2024-04-15",
      url: "#",
      tags: ["Graduate School", "Applications", "PhD", "Masters"],
      isPublic: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Interview Prep', label: 'Interview Prep' },
    { value: 'Career Development', label: 'Career Development' },
    { value: 'Technical Skills', label: 'Technical Skills' },
    { value: 'Networking', label: 'Networking' },
    { value: 'Industry Insights', label: 'Industry Insights' },
    { value: 'Education', label: 'Education' }
  ];

  const types = [
    { value: 'all', label: 'All Types' },
    { value: 'Document', label: 'Documents' },
    { value: 'Video', label: 'Videos' },
    { value: 'Article', label: 'Articles' },
    { value: 'Template', label: 'Templates' },
    { value: 'Code Repository', label: 'Code Repositories' },
    { value: 'Checklist', label: 'Checklists' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || resource.category === categoryFilter;
    const matchesType = typeFilter === 'all' || resource.type === typeFilter;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Document': return <FileText className="h-5 w-5" />;
      case 'Video': return <Video className="h-5 w-5" />;
      case 'Article': return <BookOpen className="h-5 w-5" />;
      case 'Template': return <FileText className="h-5 w-5" />;
      case 'Code Repository': return <LinkIcon className="h-5 w-5" />;
      case 'Checklist': return <FileText className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resources Library</h1>
          <p className="text-gray-600">Access and manage your mentoring resources and materials</p>
        </div>
        <button className="btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add Resource
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search resources by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            
            <button className="btn-secondary flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>

        <div className="text-gray-500">
          Showing {filteredResources.length} of {resources.length} resources
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  {getTypeIcon(resource.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{resource.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {resource.category}
                    </span>
                    <span>{resource.type}</span>
                    {!resource.isPublic && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                        Private
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4 line-clamp-2">{resource.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {resource.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  <span>{resource.downloads}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{resource.views}</span>
                </div>
                {resource.size !== '-' && (
                  <span>{resource.size}</span>
                )}
              </div>
              <span>Added {new Date(resource.dateAdded).toLocaleDateString()}</span>
            </div>

            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex-1 text-sm flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
              <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                <ExternalLink className="h-4 w-4" />
              </button>
              <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                <Users className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{resources.length}</div>
          <p className="text-sm text-gray-600">Total Resources</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {resources.reduce((sum, r) => sum + r.downloads, 0)}
          </div>
          <p className="text-sm text-gray-600">Total Downloads</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {resources.reduce((sum, r) => sum + r.views, 0)}
          </div>
          <p className="text-sm text-gray-600">Total Views</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {resources.filter(r => r.isPublic).length}
          </div>
          <p className="text-sm text-gray-600">Public Resources</p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
