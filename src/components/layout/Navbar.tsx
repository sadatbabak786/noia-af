import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/noia-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/news", label: "News" },
  { to: "/reports", label: "Reports" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-card/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NOIA Logo" className="h-10 w-10 object-contain" />
          <div className="hidden sm:block">
            <span className="text-lg font-heading font-bold text-primary">NOIA</span>
            <span className="block text-[10px] leading-tight text-muted-foreground">
              National Organization of Initiative & Action
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/donate">
            <Button className="cta-gradient border-0 gap-2 text-primary-foreground font-semibold">
              <Heart className="h-4 w-4" /> Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-card px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === link.to
                  ? "text-primary font-semibold bg-muted"
                  : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate" onClick={() => setOpen(false)}>
            <Button className="cta-gradient w-full mt-3 border-0 gap-2 text-primary-foreground font-semibold">
              <Heart className="h-4 w-4" /> Donate Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
