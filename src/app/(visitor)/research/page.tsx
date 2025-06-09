
import OpportunityCard from '@/components/ui/OpportunityCard';

const ResearchPage = () => {
  const researchOpportunities = [
    {
      title: "AI Ethics Research Project",
      provider: "MIT Computer Science",
      description: "Explore the ethical implications of artificial intelligence in healthcare and autonomous systems.",
      deadline: "April 15, 2024",
      location: "Cambridge, MA",
      tags: ["AI Ethics", "Healthcare", "Autonomous Systems"],
      type: "research" as const,
      amount: "$3,000 stipend"
    },
    {
      title: "Climate Change Data Analysis",
      provider: "UC Berkeley Environmental Science",
      description: "Analyze climate data patterns to understand long-term environmental changes and their impacts.",
      deadline: "March 30, 2024",
      location: "Berkeley, CA",
      tags: ["Climate Science", "Data Analysis", "Environmental"],
      type: "research" as const,
      amount: "$2,500 stipend"
    },
    {
      title: "Quantum Computing Research",
      provider: "Caltech Physics Department",
      description: "Participate in cutting-edge quantum computing research with potential applications in cryptography.",
      deadline: "May 1, 2024",
      location: "Pasadena, CA",
      tags: ["Quantum Computing", "Physics", "Cryptography"],
      type: "research" as const,
      amount: "$4,000 stipend"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Research Opportunities</h1>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Join groundbreaking research projects and contribute to advancing knowledge in your field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchOpportunities.map((opportunity, index) => (
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

export default ResearchPage;
