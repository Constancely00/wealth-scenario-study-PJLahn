
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type InvestmentsSectionProps = {
  iraSavings: number;
  other: number;
  total: number;
};

const InvestmentsSection: React.FC<InvestmentsSectionProps> = ({ 
  iraSavings = 0, 
  other = 0, 
  total 
}) => {
  return (
    <Table className="w-full max-w-2xl">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2 py-2"></TableHead>
          <TableHead className="text-right py-2">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-1.5">IRA Savings Account</TableCell>
          <TableCell className="number-cell py-1.5">${iraSavings.toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-1.5"></TableCell>
          <TableCell className="number-cell py-1.5">${other.toLocaleString()}</TableCell>
        </TableRow>
        <TableRow className="total-row">
          <TableCell className="py-1.5">Total Investments</TableCell>
          <TableCell className="number-cell py-1.5">${total.toLocaleString()}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default InvestmentsSection;
