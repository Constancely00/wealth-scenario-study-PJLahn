
import React from 'react';
import { Card } from '@/components/ui/card';
import IncomeSection from './IncomeSection';
import InvestmentsSection from './InvestmentsSection';
import LoanPaymentsSection from './LoanPaymentsSection';
import PropertyExpensesSection from './PropertyExpensesSection';
import LivingExpensesSection from './LivingExpensesSection';
import TaxesSection from './TaxesSection';
import BusinessPLSection from './BusinessPLSection';

interface InputsSectionProps {
  socialSecurity: {
    age62: {
      monthly: number;
      annually: number;
    };
    age67: {
      monthly: number;
      annually: number;
    };
  };
  primaryProperty: {
    expenses: {
      propertyTaxes: {
        monthly: number;
        annually: number;
      };
      insurance: {
        monthly: number;
        annually: number;
      };
      upkeep: {
        monthly: number;
        annually: number;
      };
      total: {
        monthly: number;
        annually: number;
      };
    };
    value: number;
  };
  loanPayments: {
    mortgage: {
      monthly: number;
      balance: number;
      interestRate: number;
    };
    sbaLoan: {
      monthly: number;
      balance: number;
      interestRate: number;
    };
    creditCardDebt: {
      monthly: number;
      balance: number;
      interestRate: number;
    };
    total: number;
  };
  livingExpenses: {
    otherExpenses: number;
    healthcare: {
      monthly: number;
      notes: string;
    };
    remainingExpenses: number;
    total: number;
  };
  businessIncome: {
    feed: {
      monthly: number;
      annually: number;
    };
    vetBills: {
      monthly: number;
      annually: number;
    };
    beddingSupplements: {
      monthly: number;
      annually: number;
    };
    unplannedExpenses: {
      monthly: number;
      annually: number;
    };
    totalExpenses: {
      monthly: number;
      annually: number;
    };
    income: {
      monthly: number;
      annually: number;
    };
    profits: {
      monthly: number;
      annually: number;
    };
  };
  investments: {
    iraSavings: number;
    other: number;
    total: number;
  };
}

const InputsSection: React.FC<InputsSectionProps> = ({
  socialSecurity,
  primaryProperty,
  loanPayments,
  livingExpenses,
  businessIncome,
  investments
}) => {
  // Income Data with exact values from the image
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

  // Loan Payment Data with exact values from the image
  const loanItems = [
    {
      description: "Mortgage",
      monthly: 0,
      balance: 0,
      interestRate: 0.00,
      notes: null
    },
    {
      description: "SBA Loan",
      monthly: 250,
      balance: 49000,
      interestRate: 3.75,
      notes: null
    },
    {
      description: "Credit Card Debt",
      monthly: 300,
      balance: 9000,
      interestRate: 17.49,
      notes: null
    }
  ];

  // Property Expenses Data with exact values from the image
  const propertyItems = [
    {
      description: "Property Taxes",
      monthly: 334,
      annually: 4008,
      notes: "(estimate)"
    },
    {
      description: "Insurance USAA",
      monthly: 250,
      annually: 3000,
      notes: "(estimate)"
    },
    {
      description: "Upkeep & Maintenance",
      monthly: 250,
      annually: 3000,
      notes: null
    }
  ];

  // Living Expenses Data with exact values from the image
  const livingExpenseItems = [
    {
      description: "Other Expenses",
      monthly: 0,
      annually: 0,
      notes: null
    },
    {
      description: "Healthcare",
      monthly: 500,
      annually: 6000,
      notes: "this seems low?"
    },
    {
      description: "Remaining Expenses*",
      monthly: 1100,
      annually: 13200,
      notes: null
    }
  ];

  // Business Income & Expenses Data with exact values from the image
  const businessItems = [
    {
      description: "Feed",
      monthly: 833,
      annually: 10000,
      notes: null
    },
    {
      description: "Vet Bills",
      monthly: 1417,
      annually: 17000,
      notes: null
    },
    {
      description: "Bedding and supplements",
      monthly: 1667,
      annually: 20000,
      notes: null
    },
    {
      description: "Unplanned Expenses",
      monthly: 0,
      annually: 0,
      notes: null
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="p-6 border border-[#0EA5E9]">
        <IncomeSection 
          incomeItems={incomeItems}
          totalMonthly={2612}
          totalAnnually={31344}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <InvestmentsSection 
          iraSavings={10000}
          other={0}
          total={10000}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <LoanPaymentsSection 
          loanItems={loanItems}
          totalMonthly={550}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <PropertyExpensesSection
          expenseItems={propertyItems}
          totalMonthly={834}
          totalAnnually={10008}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <LivingExpensesSection 
          expenseItems={livingExpenseItems}
          totalMonthly={1600}
          totalAnnually={19200}
          footnote="Everything else! Groceries, Dining Out, Utilities, Clothing, Gym, Entertainment, Gifts, Phone Etc."
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <TaxesSection 
          monthly={90}
          annually={1084}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <BusinessPLSection 
          items={businessItems}
          totalExpenses={{
            monthly: 3917,
            annually: 47000
          }}
          income={{
            monthly: 6667,
            annually: 80000
          }}
          profits={{
            monthly: 2750,
            annually: 33000
          }}
        />
      </Card>
    </div>
  );
};

export default InputsSection;
