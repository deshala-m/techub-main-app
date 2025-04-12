import React from 'react';
import { Link } from 'react-router-dom';

interface Marketplace {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  appCount: number;
}

const marketplaces: Marketplace[] = [
  {
    id: 1,
    name: 'Business Apps',
    description: 'Essential business applications for your organization',
    icon: '🏢',
    category: 'Business',
    appCount: 45
  },
  {
    id: 2,
    name: 'Developer Tools',
    description: 'Tools and services for developers and IT teams',
    icon: '💻',
    category: 'Development',
    appCount: 32
  },
  {
    id: 3,
    name: 'Marketing Suite',
    description: 'Marketing and advertising solutions',
    icon: '📢',
    category: 'Marketing',
    appCount: 28
  },
  {
    id: 4,
    name: 'HR & People',
    description: 'Human resources and people management tools',
    icon: '👥',
    category: 'HR',
    appCount: 23
  },
  {
    id: 5,
    name: 'Finance & Accounting',
    description: 'Financial management and accounting software',
    icon: '💰',
    category: 'Finance',
    appCount: 19
  },
  {
    id: 6,
    name: 'Sales & CRM',
    description: 'Sales and customer relationship management',
    icon: '📈',
    category: 'Sales',
    appCount: 27
  }
];

const MarketplacesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Marketplaces</h1>
        <p className="text-gray-600">Explore different categories of applications and services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketplaces.map((marketplace) => (
          <Link
            to={`/marketplace?category=${marketplace.category}`}
            key={marketplace.id}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{marketplace.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{marketplace.name}</h3>
                  <span className="text-sm text-gray-500">{marketplace.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{marketplace.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {marketplace.appCount} apps available
                </span>
                <span className="text-blue-600 hover:text-blue-700">
                  View all →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketplacesPage; 