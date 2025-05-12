
import { House } from "lucide-react";
import NavLink from "./NavLink";
import { User, Briefcase, Mail, LayoutDashboard, Image, Star, Award } from "lucide-react";

const DesktopNav = ({ activeSection, setActiveSection }: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) => {
  return (
    <div className="hidden md:flex w-3/4 bg-primary border-r border-gray-200 flex-col justify-center p-4 sticky top-0 h-screen">
      <div className="space-y-1">
        <NavLink sectionId="home" icon={User} activeSection={activeSection} setActiveSection={setActiveSection} />
        <NavLink sectionId="services" icon={Briefcase} activeSection={activeSection} setActiveSection={setActiveSection} />
        <NavLink sectionId="testimonials" icon={LayoutDashboard} activeSection={activeSection} setActiveSection={setActiveSection} />
        <NavLink sectionId="contact" icon={Mail} activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default DesktopNav;
