import React from 'react';

interface App {
  id: number;
  name: string;
  description: string;
  icon: string;
  rating: number;
  category: string;
  price: string;
}

interface AppCardProps {
  app: App;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{app.icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{app.name}</h3>
          <span className="text-sm text-gray-500">{app.category}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{app.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-gray-700">{app.rating}</span>
        </div>
        <span className="text-green-600 font-medium">{app.price}</span>
      </div>
    </div>
  );
};

export default AppCard; 