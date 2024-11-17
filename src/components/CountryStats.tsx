import { BarList } from '@tremor/react';
import { ReactNode } from 'react';

interface Country {
  name: string;
  value: number;
  icon?: ReactNode;
}

interface CountryStatsProps {
  countries: Country[];
}

export default function CountryStats({ countries }: CountryStatsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Countries</h3>
        <button className="text-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </button>
      </div>
      
      <BarList
        data={countries}
        valueFormatter={(value: number) => Intl.NumberFormat('us').format(value)}
        className="mt-2"
      />
    </div>
  );
}