import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, rating }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      <div>
        <p className="font-bold text-emerald-900">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "PureSource revolutionized our product line with their exceptional extraction services. The quality and consistency of their oils have significantly improved our cosmetic formulations.",
      author: "Sarah Johnson",
      company: "Natura Cosmetics",
      rating: 5
    },
    {
      quote: "Working with PureSource has been a game-changer for our pharmaceutical products. Their meticulous attention to detail and commitment to purity is unmatched in the industry.",
      author: "Dr. Michael Chen",
      company: "MediPharm Labs",
      rating: 5
    },
    {
      quote: "We've partnered with several extraction companies over the years, but none compare to the level of service and quality that PureSource delivers consistently.",
      author: "James Wilson",
      company: "Organic Wellness Co.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-emerald-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-emerald-100 text-lg">
            Don't just take our word for it. Hear from businesses that have transformed 
            their products with our premium extraction services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};