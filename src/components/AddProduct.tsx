export default function AddProduct() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Add a Product?</h2>
      <p className="text-sm text-gray-500 mb-4">
        Add products to your store and start selling to see orders
      </p>
      <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
        <span>+ New Product</span>
      </button>
    </div>
  );
}