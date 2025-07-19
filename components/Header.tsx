import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-2xl font-bold">
          Silver Health
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/products">Products</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/web-application">Web Application</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/events">Events</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/memories">Memories</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Avatar" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-xs p-4">
              <h2 className="text-lg font-semibold mb-4">Menu</h2>
              <nav>
                <ul>
                  <li><a href="/products" className="block py-2 hover:text-primary">Products</a></li>
                  <li><a href="/web-application" className="block py-2 hover:text-primary">Web Application</a></li>
                  <li><a href="/events" className="block py-2 hover:text-primary">Events</a></li>
                  <li><a href="/memories" className="block py-2 hover:text-primary">Memories</a></li>
                  <li><a href="/contact" className="block py-2 hover:text-primary">Contact</a></li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
