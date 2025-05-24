import React, { useEffect, useState } from 'react';
import StudioCard from './StudioCard';

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

interface StudioListProps {
  shortlistedIds: Set<number>;
  toggleShortlist: (id: number) => void;
  showOnlyShortlisted: boolean;
}

const StudioList: React.FC<StudioListProps> = ({
  shortlistedIds,
  toggleShortlist,
  showOnlyShortlisted,
}) => {
  const [studios, setStudios] = useState<Studio[]>([]);

  useEffect(() => {
   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/listings`)



      .then((res) => res.json())
      .then((data) => setStudios(data))
      .catch((err) => console.error('Failed to load listings:', err));
  }, []);

  const filteredStudios = showOnlyShortlisted
    ? studios.filter((studio) => shortlistedIds.has(studio.id))
    : studios;

  return (
    <div className="pb-4">
      {filteredStudios.length === 0 ? (
        <p className="text-center p-4 text-gray-500">No studios to show.</p>
      ) : (
        filteredStudios.map((studio) => (
          <StudioCard
            key={studio.id}
            studio={studio}
            isShortlisted={shortlistedIds.has(studio.id)}
            toggleShortlist={toggleShortlist}
          />
        ))
      )}
    </div>
  );
};

export default StudioList;
