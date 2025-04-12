import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sampleApps = [
  {
    id: 1,
    name: 'CRM Pro',
    description: 'Customer Relationship Management solution for businesses',
    longDescription: 'CRM Pro is a comprehensive customer relationship management solution that helps businesses manage their customer interactions, sales pipeline, and customer data effectively. With features like contact management, sales tracking, and customer analytics, it\'s the perfect tool for growing businesses.',
    icon: '📊',
    rating: 4.8,
    category: 'Business',
    price: '$29.99/month',
    features: [
      'Contact Management',
      'Sales Pipeline Tracking',
      'Customer Analytics',
      'Email Integration',
      'Task Management'
    ],
    screenshots: [
      'https://via.placeholder.com/400x250',
      'https://via.placeholder.com/400x250',
      'https://via.placeholder.com/400x250'
    ]
  },
  // ... other apps would be here
];

const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const app = sampleApps.find(a => a.id === Number(id));

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">App not found</h1>
          <Link to="/marketplace" className="text-blue-600 hover:underline">
            Return to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/marketplace" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Marketplace
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-start mb-8">
          <div className="text-6xl mr-6">{app.icon}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{app.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-gray-700 mr-4">{app.rating}</span>
              <span className="text-gray-500">{app.category}</span>
            </div>
            <p className="text-gray-600">{app.longDescription}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="space-y-2">
              {app.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Screenshots</h2>
            <div className="grid grid-cols-3 gap-4">
              {app.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${app.name} screenshot ${index + 1}`}
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-800">{app.price}</span>
              <span className="text-gray-500 ml-2">per month</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Install App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail; 