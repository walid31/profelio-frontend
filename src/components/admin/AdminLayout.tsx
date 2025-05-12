
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';
import { 
  User, 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Database
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { signOut, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Redirect to login if not admin
    if (!loading && !isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, loading, navigate]);

  const navItems = [
    {
      name: 'Tableau de bord',
      path: '/admin/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: 'Experts',
      path: '/admin/experts',
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: 'Demandes',
      path: '/admin/requests',
      icon: <Database className="h-5 w-5" />,
    },
    {
      name: 'Paiements',
      path: '/admin/payments',
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      name: 'Paramètres',
      path: '/admin/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Show loading or redirect user if not admin
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white">
      <div className={`relative flex flex-col h-full border-r border-gray-200 bg-gray-50 transition-all duration-300 ${
        collapsed ? 'w-[70px]' : 'w-64'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-xl font-medium">Admin</span>
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
                  className={`w-full mb-1 ${
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
            className={`w-full text-gray-500 hover:text-red-500 hover:bg-red-50 ${
              collapsed ? 'justify-center px-2' : 'justify-start px-4'
            }`}
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-3">Déconnexion</span>}
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
