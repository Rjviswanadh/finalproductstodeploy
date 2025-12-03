import React from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex items-start">
      <div className="bg-emerald-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
        {number}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-serif font-bold text-emerald-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export const Process: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Raw Material Assessment",
      description:
        "We carefully inspect and test all incoming materials to ensure they meet our strict quality standards.",
    },
    {
      number: "2",
      title: "Custom Extraction Planning",
      description:
        "Our experts work with you to determine the optimal extraction method based on your specific requirements.",
    },
    {
      number: "3",
      title: "Preparation & Processing",
      description:
        "Materials are prepared and processed using our proprietary techniques to maximize extraction efficiency.",
    },
    {
      number: "4",
      title: "Extraction & Refinement",
      description:
        "Using state-of-the-art equipment, we extract and refine oils to achieve the desired purity and composition.",
    },
    {
      number: "5",
      title: "Quality Analysis",
      description:
        "Every batch undergoes comprehensive testing to verify purity, potency, and compliance with all regulations.",
    },
    {
      number: "6",
      title: "Packaging & Delivery",
      description:
        "The final product is carefully packaged to preserve quality and delivered according to your specifications.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
            Our Extraction Process
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We follow a step-by-step approach to ensure consistent quality and
            superior results with every extraction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
