interface Order {
  id: number;
  product: string;
  image: string;
  price: string;
  status: 'Pending' | 'Completed';
  date: string;
}

const recentOrders: Order[] = [
  {
    id: 1,
    product: 'iPhone 14 Pro Max',
    image: '/products/iphone.png',
    price: '$2400 X 3',
    status: 'Pending',
    date: '12 Dec 2022'
  },
  {
    id: 2,
    product: 'Airpod',
    image: '/products/airpod.png',
    price: '$49 X 1',
    status: 'Completed',
    date: '10 Dec 2022'
  },
  {
    id: 3,
    product: 'Headphone',
    image: '/products/headphone.png',
    price: '$153 X 2',
    status: 'Completed',
    date: '09 Dec 2022'
  }
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-50 rounded-lg">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 5L2 10L8 15M2 10H18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-50 rounded-lg">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 5L18 10L12 15M18 10H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={order.image} alt={order.product} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-medium">{order.product}</h3>
                <p className="text-sm text-gray-500">{order.price}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{order.date}</p>
              <span className={`text-xs ${
                order.status === 'Completed' 
                  ? 'text-green-600' 
                  : 'text-orange-600'
              }`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}