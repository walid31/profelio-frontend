
import {
  User,
  Phone,
  Briefcase,
  Image,
  Star,
  Quote,
  CircleUser,
  GraduationCap,
  Award,
  Clock,
  GalleryHorizontal,
  Scale,
  BookOpen,
  Album as AlbumIcon,
  PenTool,
  Layers,
  ScrollText,
  PencilRuler,
  Palette,
  Database
} from "lucide-react";

export const getSectionIcons = () => {
  return {
    about: <User className="h-5 w-5 text-primary" />,
    contact: <Phone className="h-5 w-5 text-primary" />,
    services: <Briefcase className="h-5 w-5 text-primary" />,
    projects: <CircleUser className="h-5 w-5 text-primary" />,
    skills: <PenTool className="h-5 w-5 text-primary" />,
    testimonials: <Quote className="h-5 w-5 text-primary" />,
    gallery: <Image className="h-5 w-5 text-primary" />,
    process: <Layers className="h-5 w-5 text-primary" />,
    timeline: <Clock className="h-5 w-5 text-primary" />,
    notable_cases: <Scale className="h-5 w-5 text-primary" />,
    publications: <BookOpen className="h-5 w-5 text-primary" />,
    portfolio: <AlbumIcon className="h-5 w-5 text-primary" />,
    certifications: <Award className="h-5 w-5 text-primary" />,
    education: <GraduationCap className="h-5 w-5 text-primary" />,
    customization: <Palette className="h-5 w-5 text-primary" />,
    database: <Database className="h-5 w-5 text-primary" />
  };
};
