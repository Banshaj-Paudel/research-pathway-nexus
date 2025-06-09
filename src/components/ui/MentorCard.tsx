
import { Star, MessageCircle, Users } from 'lucide-react';

interface MentorCardProps {
  name: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  mentees: number;
  imageUrl?: string;
  bio: string;
}

const MentorCard = ({ 
  name, 
  title, 
  company, 
  expertise, 
  rating, 
  mentees, 
  imageUrl, 
  bio 
}: MentorCardProps) => {
  return (
    <div className="card p-6 hover:transform hover:-translate-y-1 cursor-pointer animate-fade-in">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-brand flex items-center justify-center text-white font-bold text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-text-dark">{name}</h3>
          <p className="text-text-subtle text-sm">{title}</p>
          <p className="text-text-subtle text-sm">{company}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        <div className="flex items-center mr-4">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 text-text-subtle mr-1" />
          <span className="text-sm text-text-subtle">{mentees} mentees</span>
        </div>
      </div>
      
      <p className="text-text-dark text-sm mb-4 line-clamp-3">{bio}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {expertise.map((skill, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-brand/10 text-brand text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-2">
        <button className="btn-primary flex-1 text-sm py-2">
          Connect
        </button>
        <button className="btn-secondary text-sm py-2 px-4">
          <MessageCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
