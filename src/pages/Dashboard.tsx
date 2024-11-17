import { ShoppingBagIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import StatsCard from '../components/StatsCard';
import RevenueChart from '../components/RevenueChart';
import TeamMembers from '../components/TeamMembers';
import AddProduct from '../components/AddProduct';
import RecentOrders from '../components/RecentOrders';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">My Dashboard</h1>
          <p className="text-gray-500">Your recent transactions activity and all</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            Product
          </button>
          <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            Customer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          icon={<ShoppingBagIcon className="h-6 w-6 text-purple-600" />}
          title="Total Products"
          value="8,98,879"
          change={5.6}
          showReport={true}
        />
        <StatsCard
          icon={<UsersIcon className="h-6 w-6 text-blue-600" />}
          title="Total Sales"
          value="$32,000.89"
          change={7.8}
          showReport={true}
        />
        <StatsCard
          icon={<CurrencyDollarIcon className="h-6 w-6 text-green-600" />}
          title="Total Profit"
          value="$5000.15"
          change={5.4}
          showReport={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <RevenueChart />
          <TeamMembers />
        </div>
        <div className="space-y-6">
          <AddProduct />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}