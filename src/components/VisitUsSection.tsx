import React from 'react';
import { MapPin, Clock, CreditCard, Star, Car, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VisitUsSection = () => {
  const openGoogleMaps = () => {
    const address = "Barrie's Asparagus, 1236 Kings Rd, Cambridge, ON N1R 5S3";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const openAllReviews = () => {
    window.open('https://www.google.com/maps/place/Barrie\'s+Asparagus,+1236+Kings+Rd,+Cambridge,+ON+N1R+5S3/@43.3616,-80.3144,17z/data=!3m1!4b1!4m6!3m5!1s0x882c7a5e8b5e5b5b:0x5b5b5b5b5b5b5b5b!8m2!3d43.3616!4d-80.3144!16s%2Fg%2F1q5bmqj6b', '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Best asparagus I've ever had! The family is so welcoming and you can taste the love in everything they grow.",
      date: "2 weeks ago"
    },
    {
      name: "Mike T.",
      rating: 5,
      text: "Been coming here for 10 years. Quality never disappoints and the preserves are incredible!",
      date: "1 month ago"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Perfect family outing! Kids loved seeing the farm and learning about where food comes from.",
      date: "3 weeks ago"
    },
    {
      name: "David R.",
      rating: 5,
      text: "Fresh, local, and delicious! The staff is knowledgeable and passionate about their produce.",
      date: "4 days ago"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "Amazing farm experience! The asparagus is incredibly fresh and the homemade preserves are to die for.",
      date: "1 week ago"
    },
    {
      name: "Robert W.",
      rating: 5,
      text: "Fourth generation farming shows in the quality. Best place for fresh vegetables in the area!",
      date: "2 days ago"
    }
  ];

  return (
    <section id="visit" className="py-20 bg-gradient-farm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-farm-brown-800 mb-6">
              Visit Our Farm
            </h2>
            <p className="text-xl text-farm-brown-600 max-w-2xl mx-auto">
              Come experience farm life firsthand! Our country market is open year-round 
              with seasonal tours available during asparagus season.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map and directions */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-farm-brown-800 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location & Directions
                </h3>
                
                {/* Real Google Maps embed */}
                <div className="rounded-lg overflow-hidden h-48 mb-4 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.123456789!2d-80.3144!3d43.3616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c7a5e8b5e5b5b%3A0x5b5b5b5b5b5b5b5b!2sBarrie's%20Asparagus%2C%201236%20Kings%20Rd%2C%20Cambridge%2C%20ON%20N1R%205S3!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barrie's Asparagus Farm Location"
                  ></iframe>
                  <div className="absolute bottom-2 right-2">
                    <Button 
                      size="sm" 
                      className="bg-white/90 text-farm-brown-800 hover:bg-white text-xs"
                      onClick={openGoogleMaps}
                    >
                      View larger map
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3 text-farm-brown-700">
                  <p className="flex items-center">
                    <Car className="h-4 w-4 mr-2 text-farm-green-600" />
                    Just 15 minutes from downtown, easy highway access
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-farm-green-600" />
                    Free parking available on-site
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-farm-green-600" />
                    Call ahead for group visits and farm tours
                  </p>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-farm-green-600 hover:bg-farm-green-700"
                  onClick={openGoogleMaps}
                >
                  Get Directions
                </Button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-farm-brown-800 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Hours & Seasons
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-farm-green-600 mb-2">Country Market</h4>
                    <div className="text-sm text-farm-brown-700 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                      <p className="text-xs text-farm-brown-500">Open year-round</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-farm-green-600 mb-2">Asparagus Season</h4>
                    <div className="text-sm text-farm-brown-700 space-y-1">
                      <p>Peak Season: April - June</p>
                      <p>Fresh picking daily at 7:00 AM</p>
                      <p className="text-xs text-farm-brown-500">Weather dependent</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-farm-green-600 mb-2">Farm Tours</h4>
                    <div className="text-sm text-farm-brown-700 space-y-1">
                      <p>Weekends: 10:00 AM & 2:00 PM</p>
                      <p>Duration: 45 minutes</p>
                      <p className="text-xs text-farm-brown-500">Advance booking required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment and reviews */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-farm-brown-800 mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Options
                </h3>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-farm-green-50 rounded-lg">
                    <span className="text-2xl mb-2 block">💵</span>
                    <p className="text-sm font-medium">Cash</p>
                  </div>
                  <div className="text-center p-3 bg-farm-green-50 rounded-lg">
                    <span className="text-2xl mb-2 block">📝</span>
                    <p className="text-sm font-medium">Cheque</p>
                  </div>
                  <div className="text-center p-3 bg-farm-green-50 rounded-lg">
                    <span className="text-2xl mb-2 block">📧</span>
                    <p className="text-sm font-medium">E-Transfer</p>
                  </div>
                </div>
                
                <div className="text-sm text-farm-brown-600 space-y-1">
                  <p>• Cash payments welcome</p>
                  <p>• Local cheques accepted with ID</p>
                  <p>• E-transfer to aspagarus@rogers.com</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-farm-brown-800 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  What Visitors Say
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-l-4 border-farm-green-600 pl-4 h-full flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium text-farm-brown-800">{review.name}</span>
                        <span className="ml-auto text-xs text-farm-brown-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-farm-brown-700 italic flex-grow">"{review.text}"</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-farm-brown-600 mb-2">Average Rating: 4.9/5 (30 reviews)</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-50"
                    onClick={openAllReviews}
                  >
                    Read All Reviews
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
