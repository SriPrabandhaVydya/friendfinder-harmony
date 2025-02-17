
import { Search } from "lucide-react";
import FriendCard from "../components/FriendCard";

const Index = () => {
  const friends = [
    {
      name: "Sarah Chen",
      age: 25,
      location: "San Francisco, CA",
      interests: ["Photography", "Hiking", "Coffee"],
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Alex Rivera",
      age: 28,
      location: "New York, NY",
      interests: ["Music", "Travel", "Food"],
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Emma Wilson",
      age: 24,
      location: "London, UK",
      interests: ["Art", "Yoga", "Books"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <div className="container px-4 py-12 mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Find Your Next Friend
          </span>
          <h1 className="text-4xl font-bold mb-4 text-balance">
            Connect with Amazing People <br className="hidden sm:block" />
            Who Share Your Interests
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-balance">
            Discover meaningful friendships through shared passions and experiences.
            Join our community of like-minded individuals.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search by interests, location, or name..."
              className="w-full px-6 py-4 rounded-lg border bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 pl-12"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {friends.map((friend, index) => (
            <FriendCard key={index} {...friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
