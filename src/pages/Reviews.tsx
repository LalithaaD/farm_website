
import React from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const navigate = useNavigate();

  const allReviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Best asparagus I've ever had! The family is so welcoming and you can taste the love in everything they grow.",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Mike T.",
      rating: 5,
      text: "Been coming here for 10 years. Quality never disappoints and the preserves are incredible!",
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Perfect family outing! Kids loved seeing the farm and learning about where food comes from.",
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c108?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "David R.",
      rating: 5,
      text: "Fresh, local, and delicious! The staff is knowledgeable and passionate about their produce.",
      date: "4 days ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "Amazing farm experience! The asparagus is incredibly fresh and the homemade preserves are to die for.",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Robert W.",
      rating: 5,
      text: "Fourth generation farming shows in the quality. Best place for fresh vegetables in the area!",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Emily C.",
      rating: 5,
      text: "The asparagus soup recipe they shared was amazing! Such friendly and helpful people.",
      date: "5 days ago",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Tom H.",
      rating: 5,
      text: "Drove 2 hours for this asparagus and it was worth every mile. Incredible quality and freshness!",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Maria S.",
      rating: 5,
      text: "The farm tour was educational and fun. My kids learned so much about sustainable farming!",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "James B.",
      rating: 5,
      text: "Best farm market in the region! The seasonal vegetables are always perfect.",
      date: "3 days ago",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Karen P.",
      rating: 5,
      text: "The strawberry preserves are heavenly! I buy them by the case every year.",
      date: "2 months ago",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Steve R.",
      rating: 5,
      text: "Great place to bring the family. The kids love the farm animals and fresh produce is top-notch.",
      date: "3 months ago",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Nicole A.",
      rating: 5,
      text: "Supporting local farmers has never been easier! Quality and service are exceptional.",
      date: "4 months ago",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Brian L.",
      rating: 5,
      text: "The asparagus is so fresh it squeaks when you bite it! Absolutely the best quality around.",
      date: "4 days ago",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Amanda K.",
      rating: 5,
      text: "Love the seasonal approach to farming. Everything is picked at peak ripeness!",
      date: "6 months ago",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Chris M.",
      rating: 5,
      text: "Fourth generation of excellence! You can taste the tradition in every bite.",
      date: "8 months ago",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Rachel D.",
      rating: 5,
      text: "The farm tour was incredible! Learning about asparagus cultivation was fascinating.",
      date: "10 months ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Mark T.",
      rating: 5,
      text: "Been a customer for 15 years. Consistency and quality never wavers!",
      date: "1 year ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Janet W.",
      rating: 5,
      text: "The homemade preserves are worth the trip alone. Strawberry jam is divine!",
      date: "1 year ago",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c108?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Paul F.",
      rating: 5,
      text: "Great educational experience for the kids. They now understand where food comes from!",
      date: "1 year ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Linda G.",
      rating: 5,
      text: "The asparagus season is the highlight of my year! Always fresh and delicious.",
      date: "14 months ago",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Kevin H.",
      rating: 5,
      text: "Supporting local agriculture feels good, and the quality is unmatched!",
      date: "16 months ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Michelle B.",
      rating: 5,
      text: "The farm store has everything you need for healthy eating. Love shopping here!",
      date: "18 months ago",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Gary S.",
      rating: 5,
      text: "Best asparagus in Ontario! The family's passion for farming really shows.",
      date: "20 months ago",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Susan J.",
      rating: 5,
      text: "The seasonal produce is always perfectly ripe. You can't get this quality at grocery stores!",
      date: "22 months ago",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Richard P.",
      rating: 5,
      text: "Farm-to-table at its finest! The asparagus is incredibly fresh and flavorful.",
      date: "2 years ago",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Carol M.",
      rating: 5,
      text: "Love the family atmosphere and commitment to sustainable farming practices.",
      date: "2 years ago",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Daniel K.",
      rating: 5,
      text: "The farm tours are educational and fun. Great way to spend a weekend afternoon!",
      date: "2 years ago",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-farm">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-farm-brown-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Farm
            </Button>
            <h1 className="text-2xl font-bold text-farm-brown-800">Customer Reviews</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Reviews Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-3 text-3xl font-bold text-farm-brown-800">4.9/5</span>
            </div>
            <p className="text-xl text-farm-brown-600">Based on 28 customer reviews</p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-farm-brown-800">{review.name}</h3>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-farm-brown-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-farm-brown-700 italic flex-grow">"{review.text}"</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-bold text-farm-brown-800 mb-4">
                Want to Share Your Experience?
              </h2>
              <p className="text-farm-brown-600 mb-6">
                We'd love to hear about your visit to Barrie's Asparagus Farm!
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-farm-green-600 hover:bg-farm-green-700"
              >
                Visit Our Farm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
