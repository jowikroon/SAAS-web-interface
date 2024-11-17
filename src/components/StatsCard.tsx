import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
  showReport?: boolean;
}

export default function StatsCard({ icon, title, value, change, showReport = true }: StatsCardProps) {
  const isPositive = change > 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          {icon}
        </div>
        <div className="flex items-center space-x-2">
          {showReport && (
            <button className="px-4 py-1.5 text-sm bg-purple-600 text-white rounded-lg">
              Report ↓
            </button>
          )}
          <button className="p-1.5 hover:bg-gray-50 rounded-lg">
            <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <div className={`flex items-center space-x-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? (
            <ArrowUpIcon className="h-4 w-4" />
          ) : (
            <ArrowDownIcon className="h-4 w-4" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
}