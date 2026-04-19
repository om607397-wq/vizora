import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "الرئيسية", href: "#hero" },
    { name: "أعمالنا", href: "#portfolio" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "اطلب الآن", href: "#order" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(href.replace("#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(href.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-vizora-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
        <div className="flex items-center justify-between py-[30px]">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-black text-[32px] tracking-[-1px] uppercase text-vizora-white leading-none">
              VIZORA<span className="text-vizora-green">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-[30px]">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-vizora-white opacity-70 hover:opacity-100 hover:text-vizora-green transition-all text-[14px] font-medium no-underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#order"
              onClick={(e) => handleNavClick(e, "#order")}
              className="bg-vizora-green text-vizora-black px-6 py-2.5 rounded font-extrabold hover:bg-vizora-white transition-all cursor-pointer shadow-[0_5px_15px_rgba(204,255,0,0.2)]"
            >
              اطلب بوسترك
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-vizora-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-vizora-dark border-b border-[#333] transition-all overflow-hidden",
        isOpen ? "max-h-64 py-4" : "max-h-0 py-0 border-transparent"
      )}>
        <div className="flex flex-col px-6 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-vizora-white opacity-70 hover:opacity-100 hover:text-vizora-green font-medium text-[14px]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#order"
            onClick={(e) => handleNavClick(e, "#order")}
            className="bg-vizora-green text-vizora-black px-4 py-3 rounded font-extrabold text-center mt-2 cursor-pointer"
          >
            اطلب بوسترك
          </a>
        </div>
      </div>
    </nav>
  );
}

