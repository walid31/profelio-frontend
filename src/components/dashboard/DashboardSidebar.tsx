
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';
import { 
  User, 
  BarChart2, 
  Calendar, 
  Share2, 
  FileDown, 
  MessageSquare, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const DashboardSidebar = () => {
  const { signOut } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    {
      name: 'Profil',
      path: '/dashboard',
      icon: <User className="h-5 w-5" />,
    },
    {
      name: 'Statistiques',
      path: '/dashboard/analytics',
      icon: <BarChart2 className="h-5 w-5" />,
    },
    {
      name: 'Rendez-vous',
      path: '/dashboard/bookings',
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: 'Partager',
      path: '/dashboard/share',
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      name: 'Télécharger',
      path: '/dashboard/download',
      icon: <FileDown className="h-5 w-5" />,
    },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`relative flex flex-col h-full border-r border-gray-200 bg-gray-50 transition-all duration-300 ${
      collapsed ? 'w-[70px]' : 'w-64'
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-xl font-medium">Profelio</span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={toggleSidebar}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className={`w-full justify-start mb-1 ${
                  collapsed ? 'justify-center px-2' : 'justify-start px-4'
                }`}
              >
                {item.icon}
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="border-t border-gray-200 p-4">
        <Button 
          variant="ghost" 
          className={`w-full justify-start text-gray-500 hover:text-red-500 hover:bg-red-50 ${
            collapsed ? 'justify-center px-2' : 'justify-start px-4'
          }`}
          onClick={() => signOut()}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Déconnexion</span>}
        </Button>
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-gray-100">
        <Button 
          variant="ghost" 
          className={`w-full justify-start bg-white hover:bg-green-50 text-green-600 ${
            collapsed ? 'justify-center px-2' : 'justify-start px-4'
          }`}
        >
          <MessageSquare className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Support</span>}
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
