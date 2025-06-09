
import { Search, Users, GraduationCap, Briefcase, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import OpportunityCard from '@/components/ui/OpportunityCard';

const HomePage = () => {
  const featuredOpportunities = [
    {
      title: "Microsoft LEAP Engineering Program",
      provider: "Microsoft",
      description: "A 16-week program designed to give professionals from non-traditional backgrounds the skills and experience needed to transition into software engineering roles.",
      deadline: "March 15, 2024",
      location: "Remote",
      tags: ["Software Engineering", "Diversity", "Full-time"],
      type: "job" as const,
      amount: "$120k/year"
    },
    {
      title: "Gates Millennium Scholars Program",
      provider: "Bill & Melinda Gates Foundation",
      description: "Scholarship program for outstanding minority students with significant financial need to pursue undergraduate and graduate studies.",
      deadline: "January 15, 2024",
      tags: ["Undergraduate", "Graduate", "Full Scholarship"],
      type: "scholarship" as const,
      amount: "$50,000"
    },
    {
      title: "AI Research Internship",
      provider: "Stanford University",
      description: "Summer research opportunity in artificial intelligence and machine learning under renowned faculty supervision.",
      deadline: "February 28, 2024",
      location: "Stanford, CA",
      tags: ["AI", "Machine Learning", "Research"],
      type: "research" as const,
      amount: "$6,000"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Active Opportunities" },
    { number: "10,000+", label: "Students Helped" },
    { number: "500+", label: "Partner Organizations" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover Your Next Opportunity
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Connect with scholarships, research projects, jobs, and mentors that align with your academic and career goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search opportunities..."
                className="w-full pl-10 pr-4 py-4 rounded-xl text-text-dark border-0 focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button className="bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-medium transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-text-subtle">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-dark mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-text-subtle max-w-3xl mx-auto">
              Our platform provides comprehensive resources to help students find and secure opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scholarships</h3>
              <p className="text-text-subtle">Find funding for your education from thousands of scholarship programs.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-success/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Opportunities</h3>
              <p className="text-text-subtle">Discover internships and full-time positions at top companies.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research Projects</h3>
              <p className="text-text-subtle">Join cutting-edge research projects at leading institutions.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-text-subtle">Connect with experienced professionals in your field.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-dark mb-4">
              Featured Opportunities
            </h2>
            <p className="text-xl text-text-subtle">
              Handpicked opportunities from our most trusted partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredOpportunities.map((opportunity, index) => (
              <OpportunityCard key={index} {...opportunity} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/opportunities" className="btn-primary">
              View All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who have found their dream opportunities through Research Shock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/opportunities" className="bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors">
              Browse Opportunities
            </Link>
            <Link to="/admin" className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-primary transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
