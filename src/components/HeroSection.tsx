import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Search, Users, Star, BookOpen, Download } from "lucide-react";
import heroImage from "@/assets/hero-notes.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Share. Learn.
                </span>
                <br />
                <span className="text-foreground">Excel Together.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                The ultimate platform for students to share, discover, and collaborate on study notes. 
                Transform your learning experience today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Upload className="h-5 w-5 mr-2" />
                Upload Your Notes
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Search className="h-5 w-5 mr-2" />
                Explore Notes
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Notes Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-700">
              <img 
                src={heroImage}
                alt="Students collaborating with digital notes"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-gradient-card shadow-large animate-glow">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered Summaries</span>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-4 bg-gradient-card shadow-large animate-glow animation-delay-300">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Collaborative Learning</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};