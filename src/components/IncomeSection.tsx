
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type IncomeItem = {
  description: string;
  monthly: number | null;
  annually: number | null;
  notes?: string;
};

type IncomeSectionProps = { 
  incomeItems: IncomeItem[];
  totalMonthly: number;
  totalAnnually: number;
};

const IncomeSection: React.FC<IncomeSectionProps> = ({ 
  incomeItems, 
  totalMonthly, 
  totalAnnually 
}) => {
  return (
    <Table className="w-full max-w-3xl">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 py-2"></TableHead>
          <TableHead className="text-right py-2">Monthly</TableHead>
          <TableHead className="text-right py-2">Annually</TableHead>
          <TableHead className="py-2">Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {incomeItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="py-1.5">{item.description}</TableCell>
            <TableCell className="number-cell py-1.5">
              {item.monthly !== null ? `$${item.monthly.toLocaleString()}` : '-'}
            </TableCell>
            <TableCell className="number-cell py-1.5">
              {item.annually !== null ? `$${item.annually.toLocaleString()}` : '-'}
            </TableCell>
            <TableCell className="py-1.5">{item.notes || ''}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default IncomeSection;
