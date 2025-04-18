
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type AlimonyItem = {
  type: string;
  monthly: number | null;
  annually: number | null;
  notes?: string;
};

type AlimonySectionProps = {
  alimonyItems: AlimonyItem[];
};

const AlimonySection: React.FC<AlimonySectionProps> = ({ alimonyItems }) => {
  return (
    <div className="my-8">
      <h2 className="section-header mb-4">ALIMONY</h2>
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
          {alimonyItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <TableCell className="number-cell">
                {item.monthly !== null ? `$${item.monthly.toLocaleString()}` : '-'}
              </TableCell>
              <TableCell className="number-cell">
                {item.annually !== null ? `$${item.annually.toLocaleString()}` : '-'}
              </TableCell>
              <TableCell>{item.notes || ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AlimonySection;
