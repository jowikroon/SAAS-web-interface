import { Link, useLocation } from 'react-router-dom';
import {
  ChartPieIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  DocumentTextIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: ChartPieIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Orders', href: '/orders', icon: ShoppingCartIcon },
  { name: 'Customers', href: '/customers', icon: UsersIcon },
  { name: 'Sales', href: '/sales', icon: CurrencyDollarIcon },
  { name: 'Messages', href: '/messages', icon: ChatBubbleLeftIcon, badge: 23 },
  { name: 'Notification', href: '/notifications', icon: BellIcon },
];

const accountNavigation = [
  { name: 'Credit Report', href: '/credit-report', icon: DocumentTextIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <span className="text-xl font-bold">SaasCa.</span>
        </div>
        
        <div className="mt-8 px-4">
          <span className="text-xs font-semibold text-gray-500">MENU</span>
        </div>

        <nav className="mt-4 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                item.href === location.pathname
                  ? 'bg-purple-50 text-purple-600'
                  : 'text-gray-600 hover:bg-gray-50',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon
                className={clsx(
                  item.href === location.pathname
                    ? 'text-purple-600'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
              {item.badge && (
                <span className="ml-auto bg-purple-600 text-white px-2 py-0.5 rounded-full text-xs">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-8 px-4">
          <span className="text-xs font-semibold text-gray-500">ACCOUNT</span>
        </div>

        <nav className="mt-4 flex-1 px-2 space-y-1">
          {accountNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                item.href === location.pathname
                  ? 'bg-purple-50 text-purple-600'
                  : 'text-gray-600 hover:bg-gray-50',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon
                className={clsx(
                  item.href === location.pathname
                    ? 'text-purple-600'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="px-4 mt-auto mb-4">
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
            <span className="text-sm">Upgrade to Pro</span>
          </button>
        </div>
      </div>
    </div>
  );
}