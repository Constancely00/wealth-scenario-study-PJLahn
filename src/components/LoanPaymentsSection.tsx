
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type LoanPaymentItem = {
  description: string;
  monthly: number | null;
  balance: number | null;
  interestRate: number | null;
  notes?: string;
};

type LoanPaymentsSectionProps = {
  loanItems: LoanPaymentItem[];
  totalMonthly: number;
};

const LoanPaymentsSection: React.FC<LoanPaymentsSectionProps> = ({ 
  loanItems, 
  totalMonthly 
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4"></TableHead>
          <TableHead className="text-right">Monthly</TableHead>
          <TableHead className="text-right">Balance</TableHead>
          <TableHead className="text-right">Interest Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loanItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.description}</TableCell>
            <TableCell className="number-cell">
              {item.monthly !== null ? `$${item.monthly.toLocaleString()}` : '-'}
            </TableCell>
            <TableCell className="number-cell">
              {item.balance !== null ? `$${item.balance.toLocaleString()}` : '-'}
            </TableCell>
            <TableCell className="number-cell">
              {item.interestRate !== null ? `${item.interestRate.toFixed(2)}%` : '-'}
            </TableCell>
          </TableRow>
        ))}
        <TableRow className="total-row">
          <TableCell>Total Loans</TableCell>
          <TableCell className="number-cell">${totalMonthly.toLocaleString()}</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default LoanPaymentsSection;
