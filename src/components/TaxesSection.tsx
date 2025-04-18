
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type TaxesSectionProps = {
  monthly: number;
  annually: number;
};

const TaxesSection: React.FC<TaxesSectionProps> = ({ monthly, annually }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2"></TableHead>
          <TableHead className="text-right">Monthly</TableHead>
          <TableHead className="text-right">Annually</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Income Taxes</TableCell>
          <TableCell className="number-cell">${monthly.toLocaleString()}</TableCell>
          <TableCell className="number-cell">${annually.toLocaleString()}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TaxesSection;
