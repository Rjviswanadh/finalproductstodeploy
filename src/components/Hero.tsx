import React from "react";
import { ArrowRight, Link } from "lucide-react";
import "../index.css"
import { NavLink } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="bg-dimension"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dh0wwy8i8/image/upload/v1764220586/file_00000000675c71fa8493eef3f4bf91a9_ozqewk.png?auto=compress&cs=tinysrgb&w=1260&h=750')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in">
            SLN Products <br />
            <span className="text-amber-400">For Superior Quality</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            With Latest technology and decades of expertise to deliver the
            highest quality oil extracted to our customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#gallery"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Explore Our Products
            </a>
            {/* <NavLink to='/products'>Products</NavLink> */}
          </div>
        </div>
      </div>
    </section>
  );
};
