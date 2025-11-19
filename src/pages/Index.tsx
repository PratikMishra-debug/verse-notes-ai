import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NotesGrid } from "@/components/NotesGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const { loading } = useAuth();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleUploadSuccess = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} onUploadSuccess={handleUploadSuccess} />
      <main>
        <HeroSection />
        <NotesGrid searchQuery={searchQuery} refreshTrigger={refreshTrigger} />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
