
import React from 'react';
import { ShoppingBag, Coffee, Cookie, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FarmStoreSection = () => {
  const products = [
    {
      category: 'Preserves & Jams',
      icon: <Droplets className="h-6 w-6" />,
      items: [
        'Strawberry Rhubarb Jam',
        'Asparagus Pickles',
        'Sweet Corn Relish',
        'Tomato Chutney'
      ],
      description: 'Made in small batches using traditional recipes passed down through generations.'
    },
    {
      category: 'Farm Fresh Coffee',
      icon: <Coffee className="h-6 w-6" />,
      items: [
        'Farm Blend Roast',
        'Morning Harvest',
        'Sunset Decaf',
        'Seasonal Blends'
      ],
      description: 'Locally roasted beans sourced from sustainable farms, perfect with our homemade pastries.'
    },
    {
      category: 'Artisan Snacks',
      icon: <Cookie className="h-6 w-6" />,
      items: [
        'Herb & Garlic Chips',
        'Honey Oat Cookies',
        'Farm Trail Mix',
        'Seasonal Granola'
      ],
      description: 'Handcrafted snacks made with ingredients grown right here on the farm.'
    },
    {
      category: 'Gift Baskets',
      icon: <ShoppingBag className="h-6 w-6" />,
      items: [
        'Seasonal Harvest Box',
        'Farm Fresh Starter Kit',
        'Preserves Collection',
        'Coffee Lover\'s Bundle'
      ],
      description: 'Curated collections of our finest products, perfect for sharing farm goodness.'
    }
  ];

  return (
    <section id="store" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-farm-brown-800 mb-6">
              Farm Store & Artisan Goods
            </h2>
            <p className="text-xl text-farm-brown-600 max-w-2xl mx-auto">
              Beyond fresh produce, we create delicious preserves, roast coffee, and craft 
              artisan snacks that capture the essence of farm life in every bite.
            </p>
          </div>

          {/* Featured banner */}
          <div className="bg-gradient-to-r from-farm-green-600 to-farm-green-700 text-white rounded-lg p-8 mb-16 text-center">
            <h3 className="text-2xl font-bold mb-4">🎃 Fall Harvest Special</h3>
            <p className="text-lg mb-4">
              Try our limited-edition Pumpkin Spice preserve and Apple Cinnamon coffee blend!
            </p>
            <Button variant="secondary" className="bg-white text-farm-green-700 hover:bg-farm-cream-100">
              Shop Seasonal Items
            </Button>
          </div>

          {/* Product categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((category, index) => (
              <div key={index} className="bg-farm-cream-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-farm-green-600 text-white p-3 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-farm-brown-800">{category.category}</h3>
                </div>
                
                <p className="text-farm-brown-600 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-farm-brown-700">
                      <div className="w-2 h-2 bg-farm-green-600 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process section */}
          <div className="bg-gradient-to-r from-farm-brown-50 to-farm-cream-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-farm-brown-800 mb-6 text-center">
              From Farm to Jar - Our Process
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-farm-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-farm-brown-800 mb-2">Harvest</h4>
                <p className="text-sm text-farm-brown-600">
                  We pick our produce at peak ripeness for maximum flavor
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-farm-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-farm-brown-800 mb-2">Prepare</h4>
                <p className="text-sm text-farm-brown-600">
                  Same-day processing ensures the freshest taste in every jar
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-farm-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-farm-brown-800 mb-2">Craft</h4>
                <p className="text-sm text-farm-brown-600">
                  Small batches made with family recipes and natural ingredients
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-farm-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <h4 className="font-bold text-farm-brown-800 mb-2">Share</h4>
                <p className="text-sm text-farm-brown-600">
                  Ready to enjoy or give as gifts to spread farm goodness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmStoreSection;
