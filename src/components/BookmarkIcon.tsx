import React from 'react';

interface BookmarkIconProps {
  filled?: boolean;
  className?: string;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ filled = false, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill={filled ? '#C2410C' : 'none'} 
        stroke={filled ? '#C2410C' : 'currentColor'} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
    </div>
  );
};

export default BookmarkIcon;