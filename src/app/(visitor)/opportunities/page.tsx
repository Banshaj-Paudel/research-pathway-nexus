
import OpportunityCard from '@/components/ui/OpportunityCard';

const OpportunitiesPage = () => {
  const allOpportunities = [
    {
      title: "Merit Excellence Scholarship",
      provider: "Stanford University",
      description: "Full tuition scholarship for outstanding academic achievement and leadership potential.",
      deadline: "March 15, 2024",
      location: "Stanford, CA",
      tags: ["Merit-based", "Full Tuition", "Leadership"],
      type: "scholarship" as const,
      amount: "$50,000/year"
    },
    {
      title: "Software Engineering Intern",
      provider: "Google",
      description: "Join our team to work on cutting-edge technologies and make an impact on billions of users.",
      deadline: "February 28, 2024",
      location: "Mountain View, CA",
      tags: ["Software Engineering", "Internship"],
      type: "job" as const,
      amount: "$8,000/month"
    },
    {
      title: "AI Ethics Research Project",
      provider: "MIT Computer Science",
      description: "Explore the ethical implications of artificial intelligence in healthcare systems.",
      deadline: "April 15, 2024",
      location: "Cambridge, MA",
      tags: ["AI Ethics", "Healthcare"],
      type: "research" as const,
      amount: "$3,000 stipend"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Opportunity Hub</h1>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Your one-stop destination for scholarships, jobs, and research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allOpportunities.map((opportunity, index) => (
            <OpportunityCard
              key={index}
              title={opportunity.title}
              provider={opportunity.provider}
              description={opportunity.description}
              deadline={opportunity.deadline}
              location={opportunity.location}
              tags={opportunity.tags}
              type={opportunity.type}
              amount={opportunity.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesPage;
