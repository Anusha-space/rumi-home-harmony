import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/rumi-hero.jpg";

const WelcomeScreen = () => {
  const [isStarting, setIsStarting] = useState(false);

  const handleStartSurvey = () => {
    setIsStarting(true);
    // Simulate starting the voice survey
    setTimeout(() => {
      console.log("Starting voice survey...");
    }, 1000);
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-elegant">
              <Heart className="w-6 h-6 text-white animate-float" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Rumi
            </h1>
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            Your AI companion for perfect roommate matching
          </p>
        </div>

        <Card className="gradient-card border-0 shadow-floating backdrop-blur-sm overflow-hidden">
          <div className="aspect-video relative overflow-hidden rounded-t-2xl">
            <img 
              src={heroImage} 
              alt="Rumi co-living space" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          <div className="p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
                Hey there, beautiful soul! 💕
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm Rumi, your personal roommate matching assistant! I'm here to help you find your perfect living companion through a fun, conversational survey. 
              Let's discover your lifestyle, preferences, and what makes you shine - then I'll match you with someone amazing! ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <Mic className="w-4 h-4 text-success" />
                </div>
                Voice-guided survey
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                AI-powered matching
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-secondary-foreground" />
                </div>
                Instant results
              </div>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleStartSurvey}
              disabled={isStarting}
              className="font-heading text-lg"
            >
              {isStarting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Starting your journey...
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5" />
                  Start Voice Survey
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Takes about 3-5 minutes • Your privacy is protected
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeScreen;