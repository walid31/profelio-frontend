import { LucideIcon } from "lucide-react";

type NavLinkProps = {
  sectionId: string;
  icon: LucideIcon;
  activeSection: string;
  setActiveSection: (id: string) => void;
};

const NavLink = ({
  sectionId,
  icon: Icon,
  activeSection,
  setActiveSection,
}: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const isActive = activeSection === sectionId;

  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      className="relative flex items-center  hover:text-black transition-colors group"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full  text-primary transition-colors group-hover:border-gray-700 group-hover:text-gray-700">
        <Icon size={24} />
      </div>
    </a>
  );
};

export default NavLink;
