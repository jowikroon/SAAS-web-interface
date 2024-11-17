import { AreaChart, Card, Title } from '@tremor/react';

const data = [
  { date: 'Jan', Revenue: 35000 },
  { date: 'Feb', Revenue: 42000 },
  { date: 'Mar', Revenue: 38000 },
  { date: 'Apr', Revenue: 45000 },
  { date: 'May', Revenue: 43000 },
  { date: 'Jun', Revenue: 48000 },
  { date: 'Jul', Revenue: 52000 },
  { date: 'Aug', Revenue: 49000 },
  { date: 'Sep', Revenue: 53000 },
  { date: 'Oct', Revenue: 55000 },
  { date: 'Nov', Revenue: 58000 },
  { date: 'Dec', Revenue: 62000 },
];

export default function RevenueChart() {
  return (
    <Card>
      <Title>Revenue Growth</Title>
      <AreaChart
        className="h-72 mt-4"
        data={data}
        index="date"
        categories={['Revenue']}
        colors={['purple']}
        valueFormatter={(number) => `$${Intl.NumberFormat('us').format(number)}`}
      />
    </Card>
  );
}