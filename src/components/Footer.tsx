import React from "react";
import { Droplet, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Droplet className="h-8 w-8 text-emerald-700" />
              <span className="ml-2 text-xl font-serif font-bold text-emerald-fff">
                  SLN Products
              </span>
            </div>
            <p className="text-emerald-200 mb-6">
              Premium oil extraction services with a commitment to quality,
              sustainability, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
               /*  "Services", */
                "About",
                "Process",
                "Gallery",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 
          products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our products</h3>
            <ul className="space-y-2">
              {[
                "Sesame oil",
                "Coconut oil",
                "Groundnut oil",
            "Sesame seeds",
            "Black sesame seeds",
            "Black sesame oil for mandir use",
            "Guntur red mirchi powder",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-emerald-200 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md focus:outline-none flex-1 text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-emerald-300 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SLN Products. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-emerald-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-emerald-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-emerald-300 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
