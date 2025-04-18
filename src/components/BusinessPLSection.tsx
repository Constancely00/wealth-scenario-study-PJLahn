
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Briefcase } from 'lucide-react';

type BusinessPLItem = {
  description: string;
  monthly: number | null;
  annually: number | null;
  notes?: string | null;
};

type BusinessPLSectionProps = {
  items: BusinessPLItem[];
  totalExpenses: { monthly: number; annually: number };
  income: { monthly: number; annually: number };
  profits: { monthly: number; annually: number };
};

const BusinessPLSection: React.FC<BusinessPLSectionProps> = ({
  items,
  totalExpenses,
  income,
  profits,
}) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <Briefcase className="h-6 w-6 text-[#10B981] mr-2" />
        <h2 className="text-2xl font-serif font-semibold text-wiw-dark-blue">Business P&L</h2>
      </div>
      
      <Card className="p-6 border border-[#0EA5E9]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3"></TableHead>
              <TableHead className="text-right">Monthly</TableHead>
              <TableHead className="text-right">Annually</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Expenses */}
            {items.map((item, index) => (
              <TableRow key={`expense-${index}`}>
                <TableCell>{item.description}</TableCell>
                <TableCell className="number-cell">
                  {item.monthly !== null ? `$${item.monthly.toLocaleString()}` : '-'}
                </TableCell>
                <TableCell className="number-cell">
                  {item.annually !== null ? `$${item.annually.toLocaleString()}` : '-'}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-medium bg-muted/50">
              <TableCell>Total Horse Business</TableCell>
              <TableCell className="number-cell">${totalExpenses.monthly.toLocaleString()}</TableCell>
              <TableCell className="number-cell">${totalExpenses.annually.toLocaleString()}</TableCell>
            </TableRow>
            
            {/* Income */}
            <TableRow>
              <TableCell>Horse Training Income</TableCell>
              <TableCell className="number-cell">${income.monthly.toLocaleString()}</TableCell>
              <TableCell className="number-cell">${income.annually.toLocaleString()}</TableCell>
            </TableRow>
            
            {/* Profit */}
            <TableRow className="bg-green-50 font-medium">
              <TableCell>Business Profits (Income)</TableCell>
              <TableCell className="number-cell">${profits.monthly.toLocaleString()}</TableCell>
              <TableCell className="number-cell">${profits.annually.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default BusinessPLSection;

