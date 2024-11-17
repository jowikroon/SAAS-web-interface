import { MagnifyingGlassIcon, CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const userEmail = "uxsantusdattabcd@gmail.com";
  const userName = "S. Datta";

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 px-4">
      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full h-full pl-10 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm rounded-lg bg-gray-50"
                placeholder="Search Anything"
              />
            </div>
          </div>
        </div>
        
        <div className="ml-4 flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <span>Jan 23 - Jan 27</span>
              <ChevronDownIcon className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <img
              className="h-8 w-8 rounded-full"
              src="https://ui-avatars.com/api/?name=S+D&background=6366f1&color=fff"
              alt={userName}
            />
            <div className="text-sm">
              <p className="font-medium text-gray-700">{userName}</p>
              <p className="text-gray-500 text-xs">{userEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}