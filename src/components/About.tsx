import React from "react";
import { CheckCircle } from "lucide-react";

export const About: React.FC = () => {
  const advantages = [
    "25+ years of industry experience",
    "Certified extraction specialists",
    "Proprietary extraction technology",
    "Sustainable and eco-friendly processes",
    "Consistent quality and purity standards",
    "Customizable extraction parameters",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
              About SLN Products
            </h2>
            <div className="w-20 h-1 bg-amber-400 mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              Founded in 2007, SLN Products has been at the forefront of the oil
              extraction industry for over decade. We combine traditional
              knowledge with cutting-edge technology to deliver premium quality
              products to our various Valuable Customers
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our team of experienced workers that preserve the integrity of raw
              materials while maximizing yield and purity. We pride ourselves on
              our commitment to sustainability, quality, and customer
              satisfaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block"
            >
              Get in Touch
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dh0wwy8i8/image/upload/v1748153089/Screenshot_20250525-112941_2_y0oo37.png"
                alt="Oil extraction facility"
                className="rounded-lg w-full h-auto shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-amber-400 rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-emerald-900 font-bold text-3xl">20+</p>
                <p className="text-emerald-900 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
