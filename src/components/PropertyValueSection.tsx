
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type PropertyValueItem = {
  description: string;
  value: number;
};

type PropertyValueSectionProps = {
  valueItems: PropertyValueItem[];
};

const PropertyValueSection: React.FC<PropertyValueSectionProps> = ({ valueItems }) => {
  // Filter out items with 0 values
  const filteredItems = valueItems.filter(item => item.value !== 0);

  if (filteredItems.length === 0) return null;

  return (
    <Card className="my-8 border-wiw-light-blue shadow-md">
      <CardContent className="pt-6">
        <table className="case-study-table w-full">
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index} className="zebra-row">
                <td className="py-3 px-4 text-wiw-medium-blue font-medium">{item.description}</td>
                <td className="text-right font-serif font-medium text-wiw-dark-blue py-3 px-4 number-cell">${item.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default PropertyValueSection;
