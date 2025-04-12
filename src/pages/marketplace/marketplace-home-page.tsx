import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../../components/marketplace/AppCard';
import MarketplaceHeader from '../../components/marketplace/MarketplaceHeader';

const sampleApps = [
  {
    id: 1,
    name: 'CRM Pro',
    description: 'Customer Relationship Management solution for businesses',
    icon: '📊',
    rating: 4.8,
    category: 'Business',
    price: '$29.99/month',
    path: '/marketplace/app/1'
  },
  {
    id: 2,
    name: 'Project Manager',
    description: 'Project management and team collaboration tool',
    icon: '📋',
    rating: 4.6,
    category: 'Productivity',
    price: '$19.99/month',
    path: '/marketplace/app/2'
  },
  {
    id: 3,
    name: 'HR Suite',
    description: 'Human Resources management platform',
    icon: '👥',
    rating: 4.7,
    category: 'HR',
    price: '$39.99/month',
    path: '/hr-suite'
  },
  {
    id: 4,
    name: 'Finance Tracker',
    description: 'Financial management and accounting software',
    icon: '💰',
    rating: 4.5,
    category: 'Finance',
    price: '$24.99/month',
    path: '/marketplace/app/4'
  },
  {
    id: 5,
    name: 'Marketing Hub',
    description: 'All-in-one marketing automation platform',
    icon: '📢',
    rating: 4.7,
    category: 'Marketing',
    price: '$49.99/month',
    path: '/marketplace/app/5'
  },
  {
    id: 6,
    name: 'Sales Pro',
    description: 'Sales pipeline and lead management software',
    icon: '📈',
    rating: 4.6,
    category: 'Sales',
    price: '$34.99/month',
    path: '/marketplace/app/6'
  },
  {
    id: 7,
    name: 'Support Desk',
    description: 'Customer support and ticketing system',
    icon: '🎫',
    rating: 4.4,
    category: 'Support',
    price: '$19.99/month',
    path: '/marketplace/app/7'
  }
];

const MarketplaceHome: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredApps = useMemo(() => {
    return sampleApps.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <MarketplaceHeader onSearch={handleSearch} onFilter={handleFilter} />
      
      <div className="container mx-auto px-4 py-8">
        {filteredApps.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No apps found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <Link to={app.path} key={app.id}>
                <AppCard app={app} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceHome; 