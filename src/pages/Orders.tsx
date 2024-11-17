import { ShoppingBagIcon, ShoppingCartIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import StatsCard from '../components/StatsCard';
import ProductList from '../components/ProductList';
import CountryStats from '../components/CountryStats';

const countryData = [
  {
    name: 'United States',
    value: 140987,
  },
  {
    name: 'Canada',
    value: 347153,
  },
  {
    name: 'Mexico',
    value: 598500,
  },
  {
    name: 'Brazil',
    value: 298485,
  },
];

export default function Orders() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Orders</h1>
        <p className="text-gray-500">Your buying and selling transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          icon={<ShoppingBagIcon className="h-6 w-6 text-purple-600" />}
          title="Total Orders"
          value="8,98,879"
          change={5.4}
        />
        <StatsCard
          icon={<ShoppingCartIcon className="h-6 w-6 text-blue-600" />}
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
        <CountryStats countries={countryData} />
        <ProductList />
      </div>
    </div>
  );
}