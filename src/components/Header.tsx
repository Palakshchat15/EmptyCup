import React from 'react';
import { MoreVertical } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <Logo/>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-gray-700 text-lg font-bold tracking tight">EmptyCup</h1>
      </div>
      <button className="p-1">
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default Header;
