import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Mic, 
  GitBranch, 
  Trophy, 
  MessageCircle, 
  Coins,
  Scan,
  BookOpen,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Smart Summaries",
    description: "Upload notes and get instant AI-generated summaries, flashcards, and MCQs for faster revision.",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: Mic,
    title: "Voice-to-Notes Capture", 
    description: "Record lectures and get AI-transcribed structured notes with highlights and diagrams.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: GitBranch,
    title: "Collaborative Editing",
    description: "Work together on notes like GitHub - version control with contributor credits.",
    color: "text-green-500", 
    bg: "bg-green-50 dark:bg-green-950"
  },
  {
    icon: Trophy,
    title: "Note Quality Scoring",
    description: "Earn badges and ranks for high-quality uploads. Gamified learning experience.",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950"
  },
  {
    icon: MessageCircle,
    title: "Doubt Discussion Threads",
    description: "Ask questions directly on specific lines or pages. Get peer and teacher answers.",
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-950"
  },
  {
    icon: Coins,
    title: "Peer Learning Marketplace",
    description: "Trade personalized notes and summaries using tokens. Motivates quality content.",
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    icon: Scan,
    title: "Handwriting Recognition",
    description: "Upload handwritten notes and get searchable digitized text instantly.",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    icon: BookOpen,
    title: "Exam Mode Compilation",
    description: "Auto-generate exam-specific bundles and revision packs for upcoming tests.",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950"
  },
  {
    icon: Smartphone,
    title: "Timetable Integration",
    description: "Sync with class schedule for automatic note reminders before each lecture.",
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Powerful Features
            </span> That Set Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond basic note sharing - discover AI-powered tools and collaborative features 
            that transform how students learn and study together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-large transition-all duration-500 hover:-translate-y-1 bg-gradient-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl ${feature.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};