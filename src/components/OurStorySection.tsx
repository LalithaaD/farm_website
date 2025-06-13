
import React from 'react';
import { Users, Leaf, Heart, Award } from 'lucide-react';

const OurStorySection = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-farm-brown-800 mb-6">
              Our Family Legacy
            </h2>
            <p className="text-xl text-farm-brown-600 max-w-2xl mx-auto">
              Four generations of sustainable farming, from grandpa's first asparagus patch 
              to today's thriving country market.
            </p>
          </div>

          {/* Story content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story text */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-farm-brown-700 leading-relaxed">
                  It all started in 1948 when Grandpa Barrie planted his first asparagus crowns 
                  on a small plot of rich Ontario soil. What began as a humble family garden 
                  has grown into a beloved country market that serves fresh, seasonal produce 
                  to our entire community.
                </p>
                
                <p className="text-farm-brown-700 leading-relaxed">
                  Today, our fourth generation continues the tradition of sustainable farming 
                  practices, hand-picking the finest asparagus spears, and creating artisanal 
                  goods that celebrate the bounty of each season. We believe in nurturing 
                  both the land and the community that supports us.
                </p>
                
                <p className="text-farm-brown-700 leading-relaxed">
                  Every asparagus spear, every jar of preserves, and every bag of farm-fresh 
                  produce carries with it the love, care, and tradition that has defined 
                  our family for over 75 years.
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="bg-gradient-to-br from-farm-green-100 to-farm-cream-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-farm-brown-600">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Family Farm Photo</p>
                <p className="text-sm">Four generations working the land</p>
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-farm-green-50 rounded-lg">
              <div className="bg-farm-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-farm-brown-800 mb-2">Sustainable Practices</h3>
              <p className="text-farm-brown-600">
                We use eco-friendly farming methods that protect our soil and promote biodiversity 
                for future generations.
              </p>
            </div>

            <div className="text-center p-6 bg-farm-cream-50 rounded-lg">
              <div className="bg-farm-brown-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-farm-brown-800 mb-2">Community First</h3>
              <p className="text-farm-brown-600">
                Our farm is more than a business - it's a gathering place where neighbors 
                become friends and traditions are shared.
              </p>
            </div>

            <div className="text-center p-6 bg-farm-green-50 rounded-lg">
              <div className="bg-farm-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-farm-brown-800 mb-2">Quality Promise</h3>
              <p className="text-farm-brown-600">
                Every product that leaves our farm meets the highest standards of freshness, 
                flavor, and quality that our family name represents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
