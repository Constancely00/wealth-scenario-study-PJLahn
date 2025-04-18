
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type AdditionItem = {
  description: string;
  value: number | null;
  year?: string;
};

type AdditionsSectionProps = {
  additionItems: AdditionItem[];
  totalValue: number | null;
};

const AdditionsSection: React.FC<AdditionsSectionProps> = ({ 
  additionItems,
  totalValue 
}) => {
  // Filter out items with null descriptions
  const filteredItems = additionItems.filter(item => item.description);

  if (filteredItems.length === 0) return null;

  return (
    <div className="my-8">
      <h2 className="section-header">ADDITIONS TO ASSETS</h2>
      <Card className="border-wiw-light-blue shadow-md">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2"></TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="number-cell">
                    {item.value !== null ? `$${item.value.toLocaleString()}` : '-'}
                  </TableCell>
                  <TableCell>{item.year || ''}</TableCell>
                </TableRow>
              ))}
              {totalValue !== null && (
                <TableRow className="total-row">
                  <TableCell>Total Additions</TableCell>
                  <TableCell className="number-cell">${totalValue.toLocaleString()}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionsSection;
