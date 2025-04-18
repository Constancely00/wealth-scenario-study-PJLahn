
import React from 'react';
import { Leaf, Pin } from 'lucide-react';

interface TableRow {
  age: number;
  income: number | null;
  expenses?: number;
  netIncome?: number;
  realEstate: number;
  cash: number;
  debt: number;
  netWorth: number;
  cumulativeSavingsTarget: number;
}

interface ScenarioCardProps {
  number: number;
  title: string;
  subtitle: string;
  highlights: string[];
  considerations: string[];
  tableData: TableRow[];
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ 
  number, 
  title, 
  subtitle, 
  highlights, 
  considerations, 
  tableData 
}) => {
  const formatNumber = (value: number) => {
    if (value < 0) {
      return <span className="text-red-500">(${ Math.abs(value).toLocaleString() })</span>;
    }
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-wiw-light-blue overflow-hidden scenario-card mb-8">
      <div className="bg-[#0EA5E9] bg-opacity-15 border-b border-blue-100">
        <div className="flex gap-3 items-start p-4">
          <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg font-medium flex-shrink-0">
            #{number}
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-wiw-dark-blue">{title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{subtitle}</p>
          </div>
        </div>
        <div className="h-[2px] bg-[#0EA5E9] opacity-50"></div>
      </div>
      
      <div className="p-4">
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <h4 className="font-medium text-wiw-dark-blue mb-2 text-lg">Highlights</h4>
            <ul className="list-none text-sm space-y-2 text-gray-700">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Leaf className="mr-2 text-green-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-wiw-dark-blue mb-2 text-lg">Considerations</h4>
            <ul className="list-none text-sm space-y-2 text-gray-700">
              {considerations.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Pin className="mr-2 text-yellow-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-blue-50 text-wiw-dark-blue">Age</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-green-50 text-wiw-dark-blue">Gross Income</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-amber-50 text-red-500">Total Expenses</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-purple-50 text-red-500">Net Income / Savings Target</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-green-50 text-wiw-dark-blue">Real Estate</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-blue-100">Cash + Investments</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-red-50 text-red-500">Debt</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-purple-50 text-wiw-dark-blue">Net Worth</th>
                <th className="py-2 px-4 font-medium text-center border border-gray-200 bg-indigo-50">Cume Savings<br/>Target</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-4 text-center border border-gray-200 bg-blue-50">{row.age}</td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-green-50">
                    {row.income === null ? '—' : formatNumber(row.income)}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-amber-50">
                    {row.expenses ? formatNumber(row.expenses) : '—'}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-purple-50">
                    {row.netIncome ? formatNumber(row.netIncome) : '—'}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-green-50">
                    {formatNumber(row.realEstate)}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-blue-100">
                    {formatNumber(row.cash)}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-red-50">
                    {formatNumber(-Math.abs(row.debt))}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-purple-50">
                    {formatNumber(row.netWorth)}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-200 bg-indigo-50">
                    {formatNumber(row.cumulativeSavingsTarget)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScenarioCard;
