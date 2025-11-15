import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NotesGrid } from "@/components/NotesGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NotesGrid />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
