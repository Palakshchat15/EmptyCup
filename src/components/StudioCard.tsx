import React from 'react';
import { ChevronRight, Eye, Phone, AlertCircle, Bookmark, BookmarkCheck } from 'lucide-react';
import StarRating from './StarRating';

interface Studio {
  id: number;
  name: string;
  rating: number;
  description: string;
  projects: number;
  years: number;
  priceLevel: number;
  phones: string[];
}

interface StudioCardProps {
  studio: Studio;
  isShortlisted: boolean;
  toggleShortlist: (id: number) => void;
}

const StudioCard: React.FC<StudioCardProps> = ({ studio, isShortlisted, toggleShortlist }) => {
  return (
    <div className="flex border-b bg-[#FFF9F3] last:bg-white">
      <div className="flex-1 px-4 pt-5 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold mb-1">{studio.name}</h2>
            <StarRating rating={studio.rating} />
          </div>
        </div>
        <p className="text-sm text-black mt-2 mb-3 leading-snug">{studio.description}</p>

        <div className="flex justify-between text-center text-sm mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{studio.projects}</div>
            <div className="font-semibold text-xs text-black">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{studio.years}</div>
            <div className="font-semibold text-xs text-black">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{Array(studio.priceLevel).fill('$').join('')}</div>
            <div className="font-semibold text-xs text-black">Price</div>
          </div>
        </div>

        {studio.phones.map((phone, index) => (
          <div key={index} className="font-semibold text-sm mb-1">
            {phone}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-start px-6 mt-5 space-y-3 w-24">
        <ActionButton icon={<ChevronRight className="w-4 h-4 text-[#8B4513]" />} label="Details" color="text-[#8B4513]" />
        <ActionButton icon={<Eye className="w-4 h-4 text-[#8B4513]"/>} label="Hide" color="text-[#8B4513]" />
        {/* Shortlist toggle button */}
        <button
          onClick={() => toggleShortlist(studio.id)}
          className="flex flex-col items-center text-[#8B4513]"
          aria-pressed={isShortlisted}
          aria-label={isShortlisted ? 'Remove from shortlist' : 'Add to shortlist'}
        >
          {isShortlisted ? (
            <BookmarkCheck className="w-4 h-4 text-[#8B4513]" />
          ) : (
            <Bookmark className="w-4 h-4 text-[#8B4513]" />
          )}
          <span className="text-xs">{isShortlisted ? 'Shortlisted' : 'Shortlist'}</span>
        </button>
        <ActionButton icon={<Phone className="w-4 h-4 text-[#8B4513]" />} label="Call" color="orange-600" />
        <ActionButton icon={<AlertCircle className="w-4 h-4 text-[#8B4513]" />} label="Report" color="text-[#8B4513]" />
      </div>
    </div>
  );
};

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, color }) => {
  return (
    <button className={`flex flex-col items-center text-${color}`}>
      <div className="mb-1">{icon}</div>
      <span className="text-xs text-[#8B4513]">{label}</span>
    </button>
  );
};

export default StudioCard;
