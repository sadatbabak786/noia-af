import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-xl font-heading font-bold">NOIA</h3>
            <p className="mb-4 text-sm text-primary-foreground/80">
              National Organization of Initiative & Action — empowering Afghan communities
              through sustainable development, education, and humanitarian assistance since 2010.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Our Programs" },
                { to: "/impact", label: "Our Impact" },
                { to: "/reports", label: "Reports & Transparency" },
                { to: "/get-involved", label: "Get Involved" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-heading font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Kabul, Afghanistan
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                +93 (0) 70 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@noia.org.af
              </li>
            </ul>
          </div>

          {/* Donate CTA */}
          <div>
            <h4 className="mb-4 text-lg font-heading font-semibold">Support Our Mission</h4>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Your donation helps us reach more communities and transform more lives across Afghanistan.
            </p>
            <Link to="/donate">
              <Button className="w-full gap-2 bg-accent text-accent-foreground font-semibold hover:bg-accent/90">
                <Heart className="h-4 w-4" /> Donate Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} National Organization of Initiative & Action (NOIA). All rights reserved.</p>
          <p className="mt-1">Registered NGO — License No. 4521 | Kabul, Afghanistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
