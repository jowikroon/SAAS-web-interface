interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
  date: string;
  status: 'In Stock' | 'Pending';
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    image: '/products/iphone.png',
    price: '$2400 X 3',
    quantity: 3,
    date: '12 Dec 2022',
    status: 'In Stock'
  },
  {
    id: 2,
    name: 'Logitech Bluetooth Headphone',
    image: '/products/headphone.png',
    price: '$2400 X 3',
    quantity: 3,
    date: '8 Dec 2022',
    status: 'Pending'
  },
  {
    id: 3,
    name: 'iPhone 14 Pro Max',
    image: '/products/iphone.png',
    price: '$2400 X 3',
    quantity: 3,
    date: '6 Dec 2022',
    status: 'In Stock'
  }
];

export default function ProductList() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Best Selling Products</h2>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            Filter
          </button>
          <button className="px-4 py-1.5 text-sm bg-purple-600 text-white rounded-lg">
            Add Auto Listing
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{product.date}</span>
              <span className={`px-3 py-1 rounded-full text-xs ${
                product.status === 'In Stock' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-orange-100 text-orange-600'
              }`}>
                {product.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}