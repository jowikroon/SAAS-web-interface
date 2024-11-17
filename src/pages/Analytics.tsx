import { Card, Title, DonutChart } from '@tremor/react';
import { ShoppingBagIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import StatsCard from '../components/StatsCard';
import RevenueChart from '../components/RevenueChart';

const salesData = [
  { name: 'Direct Sales', value: 35 },
  { name: 'Partner Sales', value: 45 },
  { name: 'Online Sales', value: 20 },
];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-gray-500">Analytical data based on your profile</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          icon={<ShoppingBagIcon className="h-6 w-6 text-purple-600" />}
          title="Total Orders"
          value="8,98,879"
          change={5.4}
        />
        <StatsCard
          icon={<UsersIcon className="h-6 w-6 text-blue-600" />}
          title="Pending Orders"
          value="1,13,976"
          change={-3}
        />
        <StatsCard
          icon={<CurrencyDollarIcon className="h-6 w-6 text-green-600" />}
          title="Revenue"
          value="$45,3,113"
          change={2.7}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6">
          <RevenueChart />
        </div>
        <Card className="bg-white rounded-xl">
          <Title>Sales Distribution</Title>
          <DonutChart
            className="h-80 mt-6"
            data={salesData}
            category="value"
            index="name"
            valueFormatter={(number) => `${number}%`}
            colors={['purple', 'blue', 'green']}
          />
        </Card>
      </div>
    </div>
  );
}