import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import StudioList from './components/StudioList';

function App() {
  // shortlist state: store shortlisted studio ids
  const [shortlistedIds, setShortlistedIds] = useState<Set<number>>(new Set());

  // filter toggle state for showing only shortlisted
  const [showOnlyShortlisted, setShowOnlyShortlisted] = useState(false);

  // toggle shortlist on/off per studio
  const toggleShortlist = (id: number) => {
    setShortlistedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="font-chivo min-h-screen bg-gray-50">
      <div className="w-full max-w-md mx-auto bg-white min-h-screen shadow-sm">
        <Header />
        <Navigation
          activeTab={showOnlyShortlisted ? 'shortlisted' : ''}
          setActiveTab={(tabId) => {
            if (tabId === 'shortlisted') setShowOnlyShortlisted((v) => !v);
            else setShowOnlyShortlisted(false);
          }}
        />
        <StudioList
          shortlistedIds={shortlistedIds}
          toggleShortlist={toggleShortlist}
          showOnlyShortlisted={showOnlyShortlisted}
        />
      </div>
    </div>
  );
}

export default App;
