import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

interface Note {
  id: string;
  title: string;
  description: string | null;
  subject: string | null;
  category: string | null;
  file_url: string | null;
  file_name: string | null;
  created_at: string;
}

interface NotesGridProps {
  searchQuery: string;
  refreshTrigger: number;
}

export const NotesGrid = ({ searchQuery, refreshTrigger }: NotesGridProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user, refreshTrigger]);

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setNotes(data || []);
    } catch (error: any) {
      console.error("Error fetching notes:", error);
      toast.error("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("notes")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      toast.success("Note deleted successfully");
      fetchNotes();
    } catch (error: any) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleDownload = (fileUrl: string | null, fileName: string | null) => {
    if (fileUrl) {
      window.open(fileUrl, "_blank");
    }
  };

  const filteredNotes = notes.filter((note) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      note.title.toLowerCase().includes(query) ||
      note.description?.toLowerCase().includes(query) ||
      note.subject?.toLowerCase().includes(query) ||
      note.category?.toLowerCase().includes(query)
    );
  });

  if (!user) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">Please sign in to view and upload notes</p>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">Loading notes...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {searchQuery ? "Search Results" : "Your Notes"}
            </h2>
            <p className="text-muted-foreground">
              {filteredNotes.length} {filteredNotes.length === 1 ? "note" : "notes"} found
            </p>
          </div>
        </div>

        {filteredNotes.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              {searchQuery ? "No notes match your search" : "No notes uploaded yet. Click Upload to add your first note!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="overflow-hidden hover:shadow-lg transition-smooth group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(note.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{note.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {note.description || "No description"}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.subject && <Badge variant="secondary">{note.subject}</Badge>}
                    {note.category && <Badge variant="outline">{note.category}</Badge>}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {new Date(note.created_at).toLocaleDateString()}
                    </span>
                    <Button 
                      variant="accent" 
                      size="sm"
                      onClick={() => handleDownload(note.file_url, note.file_name)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
