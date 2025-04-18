
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type PropertyExpenseItem = {
  description: string;
  monthly: number | null;
  annually: number | null;
  notes?: string;
};

type PropertyExpensesSectionProps = {
  expenseItems: PropertyExpenseItem[];
  totalMonthly: number;
  totalAnnually?: number;
};

const PropertyExpensesSection: React.FC<PropertyExpensesSectionProps> = ({ 
  expenseItems, 
  totalMonthly, 
  totalAnnually 
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3"></TableHead>
          <TableHead className="text-right">Monthly</TableHead>
          <TableHead className="text-right">Annually</TableHead>
          <TableHead>Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenseItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.description}</TableCell>
            <TableCell className="number-cell">
              {item.monthly !== null ? `$${item.monthly.toLocaleString()}` : '-'}
            </TableCell>
            <TableCell className="number-cell">
              {item.annually !== null ? `$${item.annually.toLocaleString()}` : '-'}
            </TableCell>
            <TableCell>{item.notes || ''}</TableCell>
          </TableRow>
        ))}
        <TableRow className="total-row">
          <TableCell>Total Primary Property</TableCell>
          <TableCell className="number-cell">${totalMonthly.toLocaleString()}</TableCell>
          <TableCell className="number-cell">{totalAnnually ? `$${totalAnnually.toLocaleString()}` : ''}</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PropertyExpensesSection;
