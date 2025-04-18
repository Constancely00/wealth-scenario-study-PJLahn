
import React from 'react';
import { Card } from '@/components/ui/card';
import IncomeSection from './IncomeSection';
import InvestmentsSection from './InvestmentsSection';
import { DollarSign, PiggyBank } from 'lucide-react';

interface IncomeInvestmentsSectionProps {
  data: {
    income: {
      items: Array<{
        description: string;
        monthly: number | null;
        annually: number | null;
        notes?: string;
      }>;
      totalMonthly: number;
      totalAnnually: number;
    };
    investments: {
      iraSavings: number;
      other: number;
      total: number;
    };
  };
}

const IncomeInvestmentsSection: React.FC<IncomeInvestmentsSectionProps> = ({ data }) => {
  const incomeItems = [
    {
      description: "Social Security Age 62",
      monthly: 1062,
      annually: 12744,
      notes: "(estimate)"
    },
    {
      description: "Social Security Age 67",
      monthly: 1550,
      annually: 18600,
      notes: "(estimate)"
    },
    {
      description: "Incoming Alimony",
      monthly: null,
      annually: null,
      notes: "Start and stop dates?"
    }
  ];

  const investmentItems = [
    {
      description: "IRA Savings Account",
      value: 10000,
      notes: null
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <DollarSign className="h-6 w-6 text-[#10B981] mr-2" />
        <h2 className="text-2xl font-serif font-semibold text-wiw-dark-blue">Income & Investments</h2>
      </div>
      
      <Card className="p-6 border border-[#0EA5E9]">
        <div className="flex items-center mb-4">
          <DollarSign className="h-5 w-5 text-[#8B5CF6] mr-2" />
          <h3 className="text-lg font-serif font-semibold text-wiw-dark-blue">Income Sources</h3>
        </div>
        <IncomeSection 
          incomeItems={incomeItems}
          totalMonthly={2612}
          totalAnnually={31344}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <div className="flex items-center mb-4">
          <PiggyBank className="h-5 w-5 text-[#1EAEDB] mr-2" />
          <h3 className="text-lg font-serif font-semibold text-wiw-dark-blue">Investments</h3>
        </div>
        <InvestmentsSection 
          iraSavings={10000}
          other={0}
          total={10000}
        />
      </Card>
    </div>
  );
};

export default IncomeInvestmentsSection;
