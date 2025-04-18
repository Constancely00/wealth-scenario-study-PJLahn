
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type LivingExpenseItem = {
  description: string;
  monthly: number | null;
  annually: number | null;
  notes?: string;
};

type LivingExpensesSectionProps = {
  expenseItems: LivingExpenseItem[];
  totalMonthly: number;
  totalAnnually: number;
  footnote?: string;
};

const LivingExpensesSection: React.FC<LivingExpensesSectionProps> = ({ 
  expenseItems, 
  totalMonthly, 
  totalAnnually,
  footnote 
}) => {
  return (
    <div>
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
            <TableCell>Total Living Expenses</TableCell>
            <TableCell className="number-cell">${totalMonthly.toLocaleString()}</TableCell>
            <TableCell className="number-cell">${totalAnnually.toLocaleString()}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {footnote && (
        <p className="text-sm text-gray-600 mt-2 italic">*{footnote}</p>
      )}
    </div>
  );
};

export default LivingExpensesSection;
