
import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const DashboardCard = ({ title, value, subtitle, icon, trend, className = '' }: DashboardCardProps) => {
  return (
    <div className={`card p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text-subtle text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-text-dark mt-2">{value}</p>
          {subtitle && (
            <p className="text-text-subtle text-sm mt-1">{subtitle}</p>
          )}
          {trend && (
            <div className={`flex items-center mt-2 text-sm ${
              trend.isPositive ? 'text-success' : 'text-red-500'
            }`}>
              <span>{trend.isPositive ? '↗' : '↘'}</span>
              <span className="ml-1">{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-primary/10 rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
