
import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProduceSection = () => {
  const [selectedSeason, setSelectedSeason] = useState('spring');

  const seasons = {
    spring: {
      name: 'Spring (March - May)',
      color: 'farm-green',
      produce: [
        { name: 'Asparagus', status: 'available', peak: 'April-May', description: 'Fresh, tender spears picked daily' },
        { name: 'Rhubarb', status: 'available', peak: 'April-May', description: 'Tart and perfect for pies' },
        { name: 'Spring Onions', status: 'available', peak: 'March-April', description: 'Mild and crisp' },
        { name: 'Lettuce', status: 'coming-soon', peak: 'May', description: 'Crisp mixed varieties' },
      ]
    },
    summer: {
      name: 'Summer (June - August)',
      color: 'yellow',
      produce: [
        { name: 'Tomatoes', status: 'seasonal', peak: 'July-August', description: 'Vine-ripened heirloom varieties' },
        { name: 'Sweet Corn', status: 'seasonal', peak: 'July-August', description: 'Picked fresh daily' },
        { name: 'Zucchini', status: 'seasonal', peak: 'June-August', description: 'Tender and versatile' },
        { name: 'Bell Peppers', status: 'seasonal', peak: 'July-August', description: 'Colorful and sweet' },
      ]
    },
    fall: {
      name: 'Fall (September - November)',
      color: 'orange',
      produce: [
        { name: 'Pumpkins', status: 'seasonal', peak: 'October', description: 'Perfect for carving and pies' },
        { name: 'Winter Squash', status: 'seasonal', peak: 'September-October', description: 'Butternut, acorn, and more' },
        { name: 'Apples', status: 'seasonal', peak: 'September-October', description: 'Crisp and sweet varieties' },
        { name: 'Brussels Sprouts', status: 'seasonal', peak: 'October-November', description: 'Fresh from the stalk' },
      ]
    },
    winter: {
      name: 'Winter (December - February)',
      color: 'blue',
      produce: [
        { name: 'Preserved Goods', status: 'available', peak: 'Year-round', description: 'Jams, pickles, and sauces' },
        { name: 'Root Vegetables', status: 'available', peak: 'December-February', description: 'Stored carrots, beets, potatoes' },
        { name: 'Greenhouse Herbs', status: 'available', peak: 'Year-round', description: 'Fresh basil, parsley, cilantro' },
        { name: 'Frozen Produce', status: 'available', peak: 'Year-round', description: 'Peak season vegetables frozen fresh' },
      ]
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="h-5 w-5 text-farm-green-600" />;
      case 'coming-soon':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <Calendar className="h-5 w-5 text-farm-brown-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available Now';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'Seasonal';
    }
  };

  return (
    <section id="produce" className="py-20 bg-gradient-farm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-farm-brown-800 mb-6">
              What We Grow
            </h2>
            <p className="text-xl text-farm-brown-600 max-w-2xl mx-auto mb-8">
              Fresh, seasonal produce grown with care and harvested at peak ripeness. 
              Our variety changes with the seasons to bring you the very best.
            </p>

            {/* Season selector */}
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(seasons).map(([key, season]) => (
                <Button
                  key={key}
                  variant={selectedSeason === key ? "default" : "outline"}
                  onClick={() => setSelectedSeason(key)}
                  className={`${
                    selectedSeason === key 
                      ? 'bg-farm-green-600 text-white' 
                      : 'border-farm-brown-300 text-farm-brown-700 hover:bg-farm-green-50'
                  }`}
                >
                  {season.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Current season highlight */}
          <div className="text-center mb-12 p-6 bg-white/70 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-farm-green-600 mb-2">
              🌱 Currently in Season
            </h3>
            <p className="text-farm-brown-700">
              Fresh asparagus is at its peak! Visit us daily for the freshest spears, 
              picked each morning while the dew is still on the plants.
            </p>
          </div>

          {/* Produce grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons[selectedSeason as keyof typeof seasons].produce.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-farm-brown-800">{item.name}</h4>
                  {getStatusIcon(item.status)}
                </div>
                
                <div className="mb-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'available' 
                      ? 'bg-farm-green-100 text-farm-green-700'
                      : item.status === 'coming-soon'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-farm-brown-100 text-farm-brown-700'
                  }`}>
                    {getStatusText(item.status)}
                  </span>
                </div>
                
                <p className="text-sm text-farm-brown-600 mb-2">{item.description}</p>
                <p className="text-xs text-farm-brown-500">
                  <strong>Peak Season:</strong> {item.peak}
                </p>
              </div>
            ))}
          </div>

          {/* Availability calendar */}
          <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-farm-brown-800 mb-6 text-center">
              Seasonal Availability Calendar
            </h3>
            <div className="grid grid-cols-12 gap-2 text-center">
              {/* Month headers */}
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <div key={month} className="text-xs font-medium text-farm-brown-600 p-2">
                  {month}
                </div>
              ))}
              
              {/* Asparagus row */}
              <div className="col-span-12 grid grid-cols-12 gap-2 py-2 border-t border-farm-brown-200">
                <div className="col-span-2 text-sm font-medium text-farm-brown-800 p-2 text-left">
                  Asparagus
                </div>
                {[0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0].map((level, i) => (
                  <div key={i} className={`h-6 rounded ${
                    level === 3 ? 'bg-farm-green-600' :
                    level === 1 ? 'bg-farm-green-300' :
                    'bg-gray-100'
                  }`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProduceSection;
