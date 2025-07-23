import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Moon, Sun, Sparkles, Coffee, Music, 
  Home, Clock, Users, ArrowRight 
} from "lucide-react";

interface ProfileData {
  name: string;
  sleepStyle: "early-bird" | "night-owl" | "flexible";
  cleanliness: "very-clean" | "moderately-clean" | "relaxed";
  workStyle: "quiet-focused" | "collaborative" | "mixed";
  socialLevel: "social-butterfly" | "balanced" | "introverted";
  interests: string[];
  lifestyle: string[];
}

interface UserProfileSummaryProps {
  profileData: ProfileData;
  onContinue: () => void;
}

const UserProfileSummary = ({ profileData, onContinue }: UserProfileSummaryProps) => {
  const getSleepIcon = (style: string) => {
    switch (style) {
      case "early-bird": return <Sun className="w-4 h-4" />;
      case "night-owl": return <Moon className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getCleanlinessColor = (level: string) => {
    switch (level) {
      case "very-clean": return "bg-success/20 text-success-foreground border-success/30";
      case "moderately-clean": return "bg-primary/20 text-primary-foreground border-primary/30";
      default: return "bg-secondary/20 text-secondary-foreground border-secondary/30";
    }
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="max-w-3xl w-full animate-scale-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-float" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Your Beautiful Profile
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Here's what I learned about you, {profileData.name}! ✨
          </p>
        </div>

        <Card className="gradient-card border-0 shadow-floating backdrop-blur-sm p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-primary" />
                  Sleep & Schedule
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {getSleepIcon(profileData.sleepStyle)}
                    <span className="text-foreground font-medium">
                      {profileData.sleepStyle === "early-bird" ? "Early Bird 🌅" : 
                       profileData.sleepStyle === "night-owl" ? "Night Owl 🦉" : 
                       "Flexible Schedule 🕐"}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-primary" />
                  Living Style
                </h3>
                <div className="space-y-3">
                  <Badge className={`${getCleanlinessColor(profileData.cleanliness)} px-3 py-1`}>
                    {profileData.cleanliness === "very-clean" ? "Very Clean & Organized" :
                     profileData.cleanliness === "moderately-clean" ? "Moderately Clean" :
                     "Relaxed & Casual"}
                  </Badge>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Coffee className="w-4 h-4" />
                    <span>
                      {profileData.workStyle === "quiet-focused" ? "Prefers quiet work environment" :
                       profileData.workStyle === "collaborative" ? "Enjoys collaborative spaces" :
                       "Flexible work style"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Social Energy
                </h3>
                <Badge className="bg-primary/20 text-primary-foreground border-primary/30 px-3 py-1">
                  {profileData.socialLevel === "social-butterfly" ? "Social Butterfly 🦋" :
                   profileData.socialLevel === "balanced" ? "Balanced Social Life ⚖️" :
                   "Enjoys Quiet Time 🌸"}
                </Badge>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Music className="w-5 h-5 text-primary" />
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-secondary/20 text-secondary-foreground border-secondary/30"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Lifestyle Preferences
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.lifestyle.map((pref, index) => (
                    <Badge 
                      key={index}
                      className="bg-accent/20 text-accent-foreground border-accent/30"
                    >
                      {pref}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/20 text-center">
            <p className="text-muted-foreground mb-6">
              Perfect! Now let me find your ideal roommate match... 💕
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onContinue}
              className="font-heading"
            >
              Find My Perfect Match
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserProfileSummary;