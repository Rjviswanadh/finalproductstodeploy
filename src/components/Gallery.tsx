import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const images: GalleryImage[] = [
     {
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688402615/sesame-1273412_pufmu4.jpg"   ,
         alt: "sesame seeds",
      category: "products"
    },
    {
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688402623/black-sesame_ttxjcx.jpg"  ,  
      alt: "Black sesame seeds",
      category: "products"
    },{
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688402595/Glass-bottle-of-sesame-oil-and-raw-sesame-seeds_1024x400_xdcmoq.webp",
      alt: "sesame oil",
      category: "products"
    },{
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688486062/uploadtocloddy_p4ywhm.jpg",
      alt: "groundnut oil",
      category: "products"
    },{
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688404582/jug-coconut-oil-whit-coconut-put-dark-background_csh8dj.jpg",
      alt: "coconut oil",
      category: "products"
    },{
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688402594/vecteezy_black-sesame-oil_2032171_jm3fjx.jpg",
      alt: "black sesame oil for mandir use",
      category: "products"
    },{
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688402579/shutterstock277819244-825558_l_bxjcvl.jpg",
      alt: "red Mirchi powder",
      category: "products"
    },{
      url: "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1688402608/spices-3331974_bkaxty.jpg",
      alt: "image of combined",
      category: "products"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our product gallery showcasing the finest oils and spices we offer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer relative group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                loading="lazy"
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <span className="bg-emerald-700 text-white text-sm px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute top-0 right-0 -mt-12 -mr-12 bg-emerald-700 text-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img 
              loading="lazy"
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};
