import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload, User, BookOpen, LogOut } from "lucide-react";
import { UploadDialog } from "./UploadDialog";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onSearch: (query: string) => void;
  onUploadSuccess: () => void;
}

export const Header = ({ onSearch, onUploadSuccess }: HeaderProps) => {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-hero shadow-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Quillix
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search notes, subjects, courses..."
                className="pl-10 bg-muted/50 border-border hover:bg-muted transition-smooth focus:bg-background"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Button 
                  variant="accent" 
                  size="sm"
                  onClick={() => setUploadOpen(true)}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={signOut}
                  title="Sign Out"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button 
                variant="accent" 
                size="sm"
                onClick={() => navigate("/auth")}
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
      <UploadDialog 
        open={uploadOpen} 
        onOpenChange={setUploadOpen}
        onSuccess={onUploadSuccess}
      />
    </header>
  );
};