
'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import OpportunityCard from '@/components/ui/OpportunityCard';

const ScholarshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const scholarships = [
    {
      title: "Gates Millennium Scholars Program",
      provider: "Bill & Melinda Gates Foundation",
      description: "Scholarship program for outstanding minority students with significant financial need to pursue undergraduate and graduate studies.",
      deadline: "January 15, 2024",
      tags: ["Undergraduate", "Graduate", "Full Scholarship", "Minority"],
      type: "scholarship" as const,
      amount: "$50,000"
    },
    {
      title: "Rhodes Scholarship",
      provider: "Rhodes Trust",
      description: "The world's oldest international scholarship programme, enabling outstanding young people from around the world to study at the University of Oxford.",
      deadline: "October 1, 2024",
      location: "Oxford, UK",
      tags: ["Graduate", "International", "Full Scholarship"],
      type: "scholarship" as const,
      amount: "Full Coverage"
    },
    {
      title: "National Science Foundation Graduate Research Fellowship",
      provider: "National Science Foundation",
      description: "Fellowship recognizing and supporting outstanding graduate students in NSF-supported science, technology, engineering, and mathematics disciplines.",
      deadline: "October 21, 2024",
      tags: ["STEM", "Graduate", "Research"],
      type: "scholarship" as const,
      amount: "$37,000/year"
    },
    {
      title: "Fulbright Student Program",
      provider: "U.S. Department of State",
      description: "Provides funds for individually designed study/research projects or for English Teaching Assistant Programs.",
      deadline: "October 12, 2024",
      location: "International",
      tags: ["Study Abroad", "Research", "Teaching"],
      type: "scholarship" as const,
      amount: "Varies"
    },
    {
      title: "Google Lime Scholarship",
      provider: "Google & Lime Connect",
      description: "Scholarship for students with disabilities who are pursuing computer science or related technical fields.",
      deadline: "December 4, 2024",
      tags: ["Disability", "Computer Science", "Technology"],
      type: "scholarship" as const,
      amount: "$10,000"
    },
    {
      title: "Amazon Future Engineer Scholarship",
      provider: "Amazon",
      description: "Four-year, $40,000 scholarship for high school seniors from underrepresented and underserved communities pursuing computer science.",
      deadline: "January 31, 2024",
      tags: ["High School", "Computer Science", "Underrepresented"],
      type: "scholarship" as const,
      amount: "$10,000/year"
    }
  ];

  const filters = [
    { value: 'all', label: 'All Scholarships' },
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'stem', label: 'STEM Fields' },
    { value: 'international', label: 'International' },
    { value: 'minority', label: 'Underrepresented Groups' }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || 
                         scholarship.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Scholarships</h1>
          <p className="text-xl text-text-subtle">Find funding opportunities for your education</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 rounded-xl border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {filters.map(filter => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
              
              <button className="btn-secondary flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>

          <div className="text-text-subtle">
            Showing {filteredScholarships.length} of {scholarships.length} scholarships
          </div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScholarships.map((scholarship, index) => (
            <OpportunityCard key={index} {...scholarship} />
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-text-dark mb-2">No scholarships found</h3>
            <p className="text-text-subtle">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipsPage;
