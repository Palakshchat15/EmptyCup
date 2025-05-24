import React from 'react';
import { Image, BookmarkCheck, ListFilter, MapPin, Contact } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Contacts', icon: Contact },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'shortlisted', label: 'Shortlisted', icon: BookmarkCheck },
    { id: 'sort', label: 'Sort', icon: ListFilter },
  ];

  return (
    <div className="flex justify-between items-center px-2 py-2 border-b bg-white shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex flex-col items-center flex-1 py-1 ${
            activeTab === tab.id ? 'text-black' : 'text-gray-400'
          }`}
          onClick={() => setActiveTab(tab.id)}
          aria-pressed={activeTab === tab.id}
        >
          <tab.icon
            className={`w-5 h-5 ${activeTab === tab.id ? 'text-black' : 'text-gray-400'}`}
          />
          <span className="text-[11px] mt-1">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Navigation;
