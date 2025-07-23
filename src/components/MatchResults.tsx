import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, Star, MapPin, Calendar, 
  MessageCircle, User, Sparkles 
} from "lucide-react";

interface MatchData {
  name: string;
  age: number;
  compatibilityScore: number;
  matchReasons: string[];
  roomAssignment: string;
  profileImage?: string;
  interests: string[];
  lifestyle: string[];
}

interface MatchResultsProps {
  matchData: MatchData;
  onStartChat: () => void;
  onViewRoom: () => void;
}

const MatchResults = ({ matchData, onStartChat, onViewRoom }: MatchResultsProps) => {
  const renderHearts = (score: number) => {
    const hearts = [];
    const fullHearts = Math.floor(score / 20);
    const hasHalfHeart = score % 20 >= 10;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullHearts) {
        hearts.push(
          <Heart key={i} className="w-6 h-6 text-primary fill-primary" />
        );
      } else if (i === fullHearts && hasHalfHeart) {
        hearts.push(
          <div key={i} className="relative">
            <Heart className="w-6 h-6 text-primary/30" />
            <Heart className="w-6 h-6 text-primary fill-primary absolute inset-0" style={{clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'}} />
          </div>
        );
      } else {
        hearts.push(
          <Heart key={i} className="w-6 h-6 text-primary/30" />
        );
      }
    }
    return hearts;
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-scale-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-elegant animate-float">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Your Perfect Match! 
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            I found someone absolutely wonderful for you! ✨
          </p>
        </div>

        <Card className="gradient-card border-0 shadow-floating backdrop-blur-sm overflow-hidden">
          <div className="p-8 md:p-10">
            {/* Match Header */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="relative">
                <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center shadow-elegant">
                  {matchData.profileImage ? (
                    <img 
                      src={matchData.profileImage} 
                      alt={matchData.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-white" />
                  )}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {matchData.name}
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  {matchData.age} years old
                </p>

                {/* Compatibility Score */}
                <div className="mb-4">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    {renderHearts(matchData.compatibilityScore)}
                  </div>
                  <p className="font-heading text-2xl font-bold text-primary">
                    {matchData.compatibilityScore}% Compatible
                  </p>
                </div>

                {/* Room Assignment */}
                <div className="flex items-center justify-center md:justify-start gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">Room {matchData.roomAssignment}</span>
                </div>
              </div>
            </div>

            {/* Match Explanation */}
            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Why You're Perfect Together
              </h3>
              <div className="grid gap-3">
                {matchData.matchReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 gradient-secondary rounded-xl">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shared Interests */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                  Shared Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {matchData.interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      className="bg-primary/20 text-primary-foreground border-primary/30"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                  Compatible Lifestyle
                </h4>
                <div className="flex flex-wrap gap-2">
                  {matchData.lifestyle.map((trait, index) => (
                    <Badge 
                      key={index}
                      className="bg-secondary/20 text-secondary-foreground border-secondary/30"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onStartChat}
                className="font-heading"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chatting
              </Button>
              <Button 
                variant="floating" 
                size="lg" 
                onClick={onViewRoom}
                className="font-heading"
              >
                <MapPin className="w-5 h-5" />
                View Your Room
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Your room assignment is confirmed! Welcome to your new home 🏠💕
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MatchResults;