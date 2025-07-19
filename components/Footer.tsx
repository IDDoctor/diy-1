import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>Silver Health Management Team is dedicated to providing professional elderly care and health management services.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p>Email: info@silverhealth.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/products" className="hover:text-primary">Products</a></li>
            <li><a href="/web-application" className="hover:text-primary">Web Application</a></li>
            <li><a href="/events" className="hover:text-primary">Events</a></li>
            <li><a href="/memories" className="hover:text-primary">Memories</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p>Sign up for our newsletter to stay updated on our services and events.</p>
          <div className="flex mt-4">
            <Input type="email" placeholder="Your email" className="mr-2" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Silver Health Management Team. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
