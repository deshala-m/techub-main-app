import React from 'react';
import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingCart, Users } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <ArrowUp className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="mt-2 text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      isPositive: true,
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: 'Total Orders',
      value: '2,350',
      change: '+15.3%',
      isPositive: true,
      icon: <ShoppingCart className="h-6 w-6" />,
    },
    {
      title: 'Products Sold',
      value: '12,234',
      change: '-2.4%',
      isPositive: false,
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: 'Active Customers',
      value: '573',
      change: '+4.6%',
      isPositive: true,
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats; 