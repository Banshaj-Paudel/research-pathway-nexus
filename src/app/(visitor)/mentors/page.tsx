
'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import MentorCard from '@/components/ui/MentorCard';

const MentorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('all');

  const mentors = [
    {
      name: "Dr. Sarah Chen",
      title: "Senior Software Engineer",
      company: "Google",
      expertise: ["Machine Learning", "Data Science", "Python", "Career Development"],
      rating: 4.9,
      mentees: 25,
      bio: "PhD in Computer Science with 8+ years at Google. Passionate about helping underrepresented students break into tech. Specialized in ML and AI systems.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b913?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Johnson",
      title: "Investment Banking Analyst",
      company: "Goldman Sachs",
      expertise: ["Finance", "Investment Banking", "Financial Modeling", "Interview Prep"],
      rating: 4.8,
      mentees: 18,
      bio: "MBA from Wharton, currently at Goldman Sachs. Focus on helping students navigate finance careers and prepare for challenging interviews.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Research Scientist",
      company: "Stanford University",
      expertise: ["Biomedical Research", "PhD Applications", "Academic Writing", "Lab Management"],
      rating: 4.9,
      mentees: 32,
      bio: "Leading researcher in biomedical engineering at Stanford. Mentor for students pursuing graduate school and academic research careers.",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alex Kim",
      title: "Product Manager",
      company: "Meta",
      expertise: ["Product Management", "UX Design", "Startup Strategy", "Tech Leadership"],
      rating: 4.7,
      mentees: 22,
      bio: "Product leader with experience at multiple unicorn startups. Helps students transition into product roles and develop leadership skills.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer Williams",
      title: "Marketing Director",
      company: "Nike",
      expertise: ["Digital Marketing", "Brand Strategy", "Content Creation", "Analytics"],
      rating: 4.8,
      mentees: 28,
      bio: "15+ years in marketing at Fortune 500 companies. Specializes in helping students build strong personal brands and marketing careers.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      title: "Consultant",
      company: "McKinsey & Company",
      expertise: ["Management Consulting", "Case Studies", "Business Strategy", "Networking"],
      rating: 4.9,
      mentees: 35,
      bio: "Senior consultant with expertise in healthcare and technology sectors. Passionate about coaching students through consulting recruitment.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const fields = [
    { value: 'all', label: 'All Fields' },
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'research', label: 'Research & Academia' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'healthcare', label: 'Healthcare' }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesField = selectedField === 'all' || 
                        mentor.expertise.some(skill => {
                          const fieldMap: { [key: string]: string[] } = {
                            technology: ['machine learning', 'data science', 'python', 'software', 'tech'],
                            finance: ['finance', 'investment', 'banking', 'financial'],
                            consulting: ['consulting', 'strategy', 'business'],
                            research: ['research', 'phd', 'academic', 'biomedical'],
                            marketing: ['marketing', 'brand', 'content', 'analytics'],
                            healthcare: ['biomedical', 'healthcare', 'medical']
                          };
                          
                          return fieldMap[selectedField]?.some(keyword => 
                            skill.toLowerCase().includes(keyword)
                          ) || false;
                        });
    
    return matchesSearch && matchesField;
  });

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Mentors & Ambassadors</h1>
          <p className="text-xl text-text-subtle">Connect with experienced professionals in your field</p>
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
                placeholder="Search mentors by name, company, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="px-4 py-3 rounded-xl border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {fields.map(field => (
                  <option key={field.value} value={field.value}>
                    {field.label}
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
            Showing {filteredMentors.length} of {mentors.length} mentors
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-semibold text-text-dark mb-2">No mentors found</h3>
            <p className="text-text-subtle">Try adjusting your search terms or field selection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorsPage;
