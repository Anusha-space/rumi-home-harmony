import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WelcomeScreen from "@/components/WelcomeScreen";
import UserProfileSummary from "@/components/UserProfileSummary";
import MatchResults from "@/components/MatchResults";
import AdminDashboard from "@/components/AdminDashboard";
import { ArrowLeft, Heart, User, Shield, Home } from "lucide-react";

type ViewState = "navigation" | "welcome" | "profile" | "match" | "admin";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>("navigation");

  // Mock data for demonstrations
  const mockProfileData = {
    name: "Sarah",
    sleepStyle: "early-bird" as const,
    cleanliness: "very-clean" as const,
    workStyle: "quiet-focused" as const,
    socialLevel: "balanced" as const,
    interests: ["Yoga", "Reading", "Cooking", "Art", "Hiking"],
    lifestyle: ["Plant-based diet", "Meditation", "Early bedtimes", "Clean spaces"]
  };

  const mockMatchData = {
    name: "Emma Chen",
    age: 24,
    compatibilityScore: 95,
    matchReasons: [
      "Both of you are early birds who love morning yoga sessions! 🧘‍♀️",
      "You share a passion for plant-based cooking and trying new recipes 🌱",
      "Similar cleanliness standards - you both appreciate organized, peaceful spaces ✨",
      "Both enjoy quiet work environments and respect each other's focus time 📚"
    ],
    roomAssignment: "A-201",
    interests: ["Yoga", "Cooking", "Art", "Mindfulness"],
    lifestyle: ["Early mornings", "Plant-based", "Organized", "Wellness-focused"]
  };

  const renderNavigation = () => (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-elegant animate-float">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground">
              Rumi
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-medium mb-4">
            Premium Roommate Matching for Women
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our beautiful, intuitive interface designed specifically for women's co-living spaces. 
            Explore each component of our premium matching system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="gradient-card border-0 shadow-soft p-8 cursor-pointer transition-smooth hover:shadow-elegant hover:scale-105"
            onClick={() => setCurrentView("welcome")}
          >
            <div className="text-center">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Welcome Experience
              </h3>
              <p className="text-muted-foreground text-sm">
                Voice-guided onboarding with Rumi assistant
              </p>
            </div>
          </Card>

          <Card 
            className="gradient-card border-0 shadow-soft p-8 cursor-pointer transition-smooth hover:shadow-elegant hover:scale-105"
            onClick={() => setCurrentView("profile")}
          >
            <div className="text-center">
              <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Profile Summary
              </h3>
              <p className="text-muted-foreground text-sm">
                Beautiful visualization of user preferences
              </p>
            </div>
          </Card>

          <Card 
            className="gradient-card border-0 shadow-soft p-8 cursor-pointer transition-smooth hover:shadow-elegant hover:scale-105"
            onClick={() => setCurrentView("match")}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Match Results
              </h3>
              <p className="text-muted-foreground text-sm">
                Compatibility scores with room assignments
              </p>
            </div>
          </Card>

          <Card 
            className="gradient-card border-0 shadow-soft p-8 cursor-pointer transition-smooth hover:shadow-elegant hover:scale-105"
            onClick={() => setCurrentView("admin")}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Admin Dashboard
              </h3>
              <p className="text-muted-foreground text-sm">
                Manage users, matches, and room assignments
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Click any card above to explore that component ✨
          </p>
        </div>
      </div>
    </div>
  );

  const renderBackButton = () => (
    <div className="fixed top-6 left-6 z-50">
      <Button 
        variant="floating" 
        size="sm"
        onClick={() => setCurrentView("navigation")}
        className="shadow-floating"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Navigation
      </Button>
    </div>
  );

  if (currentView === "navigation") {
    return renderNavigation();
  }

  return (
    <>
      {renderBackButton()}
      {currentView === "welcome" && <WelcomeScreen />}
      {currentView === "profile" && (
        <UserProfileSummary 
          profileData={mockProfileData}
          onContinue={() => console.log("Continue to matching...")}
        />
      )}
      {currentView === "match" && (
        <MatchResults 
          matchData={mockMatchData}
          onStartChat={() => console.log("Start chat...")}
          onViewRoom={() => console.log("View room...")}
        />
      )}
      {currentView === "admin" && <AdminDashboard />}
    </>
  );
};

export default Index;
