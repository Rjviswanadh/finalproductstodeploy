import React, { useState, useEffect } from "react";
import { Menu, X, Droplet, Heading1 } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Home } from "./Home";

 const items = [
            "Home",
            /* "Services", */
            "About",
            "Process",
            "Gallery",
            "Contact",
            "Review Us",
          ]

          export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const onProducts = location.pathname.includes("products");

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Droplet className="h-8 w-8 text-emerald-700" />
          <span className="ml-2 text-xl font-serif font-bold text-emerald-900">
            SLN Products
          </span>
        </div>

        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {items.map((item) => {
            if (item === "Review Us") {
              return (
                <a
                  key={item}
                  href="https://g.page/r/CdYhgAOh2-5mEBI/review"
                  className="font-medium transition-colors text-emerald-800 hover:text-emerald-600"
                >
                  {item}
                </a>
              );
            }

             if (item === "Home") {
              return onProducts ? (
                <Link
                  key={item}
                  to="/"
                  className="font-medium transition-colors text-emerald-800 hover:text-emerald-600"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href="#"
                  className="font-medium transition-colors text-emerald-800 hover:text-emerald-600"
                >
                  {item}
                </a>
              );
            }

             // If on products page, navigate back to home with the hash using Link
            if (onProducts) {
              return (
                <Link
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="font-medium transition-colors text-emerald-800 hover:text-emerald-600"
                >
                  {item}
                </Link>
              );
            }

            // Otherwise just use a normal anchor (in-page scroll)
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium transition-colors text-emerald-800 hover:text-emerald-600"
              >
                {item}
              </a>
            );
          })}
        </nav>

         {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {items.map((item) => {
              if (item === "Review Us") {
                return (
                  <a
                    key={item}
                    href="https://g.page/r/CdYhgAOh2-5mEBI/review"
                    className="text-emerald-800 hover:text-emerald-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                );
              }

                if (item === "Home") {
                return onProducts ? (
                  <Link
                    key={item}
                    to="/"
                    className="text-emerald-800 hover:text-emerald-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    key={item}
                    href="#"
                    className="text-emerald-800 hover:text-emerald-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                );
              }

               return onProducts ? (
                <Link
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="text-emerald-800 hover:text-emerald-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-emerald-800 hover:text-emerald-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};