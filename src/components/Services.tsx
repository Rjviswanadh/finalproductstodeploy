import React from "react";
import {
  Droplet,
  Leaf,
  /* Atom, Beaker, */ Factory,
  Award,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
      <div className="mb-4 text-emerald-700">{icon}</div>
      <h3 className="text-xl font-serif font-bold text-emerald-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Droplet className="h-10 w-10" />,
      title: "Extracted Oils",
      description:
        "Our Manufacturing Oils preserves all essential compounds, resulting in the purest oil with maximum efficacy and potency.",
    },
    /*  {
      icon: <Beaker className="h-10 w-10" />,
      title: "CO2 Extraction",
      description: "Using state-of-the-art supercritical CO2 technology to create solvent-free, clean extracts with superior flavor profiles."
    }, */
    /*  {
      icon: <Atom className="h-10 w-10" />,
      title: "Molecular Distillation",
      description:
        "Advanced distillation techniques that separate and purify individual compounds for specialized applications.",
    }, */
    {
      icon: <Factory className="h-10 w-10" />,
      title: "Large Scale Production",
      description:
        "Industrial-scale facilities capable of processing high volumes while maintaining consistent quality standards.",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Certification",
      description:
        "Fully certified processes ensuring your products meet the highest standards of purity and sustainability.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Quality Testing",
      description:
        "Comprehensive laboratory analysis with detailed certificates of analysis.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
            Our Extraction Services
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We offer a comprehensive range of extracted Oils and Wide range of
            Products on your requirements and quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
