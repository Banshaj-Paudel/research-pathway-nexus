
import OpportunityCard from '@/components/ui/OpportunityCard';

const JobsPage = () => {
  const jobs = [
    {
      title: "Software Engineering Intern",
      provider: "Google",
      description: "Join our team to work on cutting-edge technologies and make an impact on billions of users worldwide.",
      deadline: "March 15, 2024",
      location: "Mountain View, CA",
      tags: ["Software Engineering", "Internship", "Full-time"],
      type: "job" as const,
      amount: "$8,000/month"
    },
    {
      title: "Research Assistant",
      provider: "Stanford University",
      description: "Assist in groundbreaking AI research projects with leading professors and graduate students.",
      deadline: "April 1, 2024",
      location: "Stanford, CA",
      tags: ["AI", "Research", "Part-time"],
      type: "job" as const,
      amount: "$25/hour"
    },
    {
      title: "Data Science Intern",
      provider: "Microsoft",
      description: "Work with large datasets and machine learning models to drive business insights.",
      deadline: "February 28, 2024",
      location: "Seattle, WA",
      tags: ["Data Science", "ML", "Internship"],
      type: "job" as const,
      amount: "$7,500/month"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Job Opportunities</h1>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Discover exciting career opportunities from leading companies and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <OpportunityCard
              key={index}
              title={job.title}
              provider={job.provider}
              description={job.description}
              deadline={job.deadline}
              location={job.location}
              tags={job.tags}
              type={job.type}
              amount={job.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
