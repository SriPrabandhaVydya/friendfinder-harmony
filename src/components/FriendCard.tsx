
import { Heart, MessageCircle, MapPin } from "lucide-react";

interface FriendCardProps {
  name: string;
  age: number;
  location: string;
  interests: string[];
  imageUrl: string;
}

const FriendCard = ({ name, age, location, interests, imageUrl }: FriendCardProps) => {
  return (
    <div className="glass-card rounded-lg p-6 w-full max-w-sm mx-auto transform transition-all duration-300 hover:translate-y-[-4px] animate-in">
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-xl">{name}, {age}</h3>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              <MapPin size={14} className="mr-1" /> {location}
            </p>
          </div>
          <button className="text-primary hover:text-primary-hover transition-colors">
            <Heart className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
          <MessageCircle size={18} />
          Connect
        </button>
      </div>
    </div>
  );
};

export default FriendCard;
