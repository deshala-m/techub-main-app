import React, { useState } from 'react';

interface MarketplaceHeaderProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

const categories = [
  'All',
  'Business',
  'Productivity',
  'HR',
  'Finance',
  'Marketing',
  'Sales',
  'Support'
];

const MarketplaceHeader: React.FC<MarketplaceHeaderProps> = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div className="bg-white shadow-sm mb-8">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">App Marketplace</h1>
          <p className="text-gray-600">Discover and integrate powerful applications for your business</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHeader; 