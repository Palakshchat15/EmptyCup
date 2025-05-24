import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-black fill-black" />
      ))}
      
      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-black" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 text-black fill-black" />
          </div>
        </div>
      )}
      
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-black" />
      ))}
    </div>
  );
};

export default StarRating;