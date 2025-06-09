
import { Calendar, MapPin, Clock } from 'lucide-react';

interface OpportunityCardProps {
  title: string;
  provider: string;
  description: string;
  deadline?: string;
  location?: string;
  tags: string[];
  type: 'scholarship' | 'job' | 'research';
  amount?: string;
  imageUrl?: string;
}

const OpportunityCard = ({ 
  title, 
  provider, 
  description, 
  deadline, 
  location, 
  tags, 
  type, 
  amount,
  imageUrl 
}: OpportunityCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'scholarship': return 'bg-success text-white';
      case 'job': return 'bg-primary text-white';
      case 'research': return 'bg-brand text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="card p-6 hover:transform hover:-translate-y-1 cursor-pointer animate-fade-in">
      {imageUrl && (
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor()}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
        {amount && (
          <span className="text-accent font-bold text-lg">{amount}</span>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-text-dark mb-2">{title}</h3>
      <p className="text-text-subtle text-sm mb-2">{provider}</p>
      <p className="text-text-dark mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-blue-50 text-primary text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm text-text-subtle">
        <div className="flex items-center space-x-4">
          {deadline && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{deadline}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
          )}
        </div>
        
        <button className="btn-primary text-sm py-2 px-4">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default OpportunityCard;
