import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Download, Eye, FileText, Users, Calendar } from "lucide-react";

// Mock data for notes
const mockNotes = [
  {
    id: 1,
    title: "Advanced Calculus - Integration Techniques",
    subject: "Mathematics",
    course: "MATH 301",
    author: "Sarah Chen",
    authorAvatar: "/api/placeholder/32/32",
    rating: 4.8,
    downloads: 234,
    views: 567,
    uploadDate: "2 days ago",
    fileType: "PDF",
    tags: ["calculus", "integration", "derivatives"],
    description: "Comprehensive notes covering advanced integration techniques including substitution, integration by parts, and partial fractions."
  },
  {
    id: 2,
    title: "Organic Chemistry Reaction Mechanisms", 
    subject: "Chemistry",
    course: "CHEM 205",
    author: "Alex Johnson",
    authorAvatar: "/api/placeholder/32/32",
    rating: 4.9,
    downloads: 189,
    views: 423,
    uploadDate: "1 week ago",
    fileType: "PPT",
    tags: ["organic", "reactions", "mechanisms"],
    description: "Detailed presentation on organic reaction mechanisms with step-by-step explanations and practice problems."
  },
  {
    id: 3,
    title: "Machine Learning Algorithms Overview",
    subject: "Computer Science", 
    course: "CS 485",
    author: "Dr. Maria Garcia",
    authorAvatar: "/api/placeholder/32/32",
    rating: 5.0,
    downloads: 456,
    views: 892,
    uploadDate: "3 days ago",
    fileType: "PDF",
    tags: ["ml", "algorithms", "ai"],
    description: "Complete overview of machine learning algorithms including supervised, unsupervised, and reinforcement learning approaches."
  },
  {
    id: 4,
    title: "World War II Historical Analysis",
    subject: "History",
    course: "HIST 120",
    author: "Emma Wilson",
    authorAvatar: "/api/placeholder/32/32",
    rating: 4.7,
    downloads: 167,
    views: 334,
    uploadDate: "5 days ago",
    fileType: "DOCX",
    tags: ["wwii", "history", "analysis"],
    description: "In-depth analysis of World War II causes, major events, and global impact with primary source references."
  },
  {
    id: 5,
    title: "Microeconomics Supply & Demand",
    subject: "Economics",
    course: "ECON 101",
    author: "James Liu",
    authorAvatar: "/api/placeholder/32/32",
    rating: 4.6,
    downloads: 298,
    views: 445,
    uploadDate: "1 week ago",
    fileType: "PDF",
    tags: ["economics", "supply", "demand"],
    description: "Fundamental concepts of supply and demand with real-world examples and graphical representations."
  },
  {
    id: 6,
    title: "Psychology Research Methods",
    subject: "Psychology", 
    course: "PSYC 200",
    author: "Lisa Rodriguez",
    authorAvatar: "/api/placeholder/32/32",
    rating: 4.8,
    downloads: 223,
    views: 378,
    uploadDate: "4 days ago",
    fileType: "PDF",
    tags: ["psychology", "research", "methods"],
    description: "Comprehensive guide to psychological research methods including experimental design and statistical analysis."
  }
];

const getFileIcon = (fileType: string) => {
  return <FileText className="h-4 w-4" />;
};

const getSubjectColor = (subject: string) => {
  const colors: { [key: string]: string } = {
    "Mathematics": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Chemistry": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", 
    "Computer Science": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "History": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Economics": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "Psychology": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  };
  return colors[subject] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
};

export const NotesGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Study Notes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover high-quality notes shared by top students across various subjects and courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNotes.map((note, index) => (
            <Card 
              key={note.id} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <Badge className={getSubjectColor(note.subject)}>
                    {note.subject}
                  </Badge>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{note.rating}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{note.course}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {note.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {note.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{note.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{note.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getFileIcon(note.fileType)}
                    <span>{note.fileType}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={note.authorAvatar} alt={note.author} />
                    <AvatarFallback className="text-xs bg-muted">
                      {note.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-muted-foreground">
                    <div className="font-medium">{note.author}</div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{note.uploadDate}</span>
                    </div>
                  </div>
                </div>

                <Button variant="card" size="sm" className="shadow-soft">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            <Users className="h-5 w-5 mr-2" />
            Explore All Notes
          </Button>
        </div>
      </div>
    </section>
  );
};