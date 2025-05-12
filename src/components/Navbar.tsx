
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 px-5">
          <Link href="/" className="flex items-center gap-2">
            <img src="/media/logo/white-logo.png" alt="Profelio Logo" className="h-14" />
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className={navigationMenuTriggerStyle()}>
                Accueil
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/templates"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Tous nos templates
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Découvrez notre collection complète de templates
                          professionnels.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                      <Link
                        href="/templates/consultant"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Consultant</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Template idéal pour les consultants
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/templates/avocat"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Avocat</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Template professionnel pour avocats
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/templates/medecin"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Médecin</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Template adapté au secteur médical
                        </p>
                      </Link>
                    </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/request-template/consultant"
                className={navigationMenuTriggerStyle()}
              >
                Demande Personnalisée
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" className={navigationMenuTriggerStyle()}>
                Blog
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#pricing" className={navigationMenuTriggerStyle()}>
                Tarifs
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
