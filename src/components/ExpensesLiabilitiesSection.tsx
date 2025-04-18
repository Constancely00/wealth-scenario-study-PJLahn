
import React from 'react';
import { Card } from '@/components/ui/card';
import LoanPaymentsSection from './LoanPaymentsSection';
import PropertyExpensesSection from './PropertyExpensesSection';
import LivingExpensesSection from './LivingExpensesSection';
import TaxesSection from './TaxesSection';
import { Briefcase, Home, CreditCard, Receipt } from 'lucide-react';

interface ExpensesLiabilitiesSectionProps {
  data: {
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
    propertyExpenses: {
      propertyTaxes: {
        monthly: number;
        annually: number;
        notes: string;
      };
      insurance: {
        monthly: number;
        annually: number;
        notes: string;
      };
      upkeep: {
        monthly: number;
        annually: number;
        notes: string;
      };
      total: {
        monthly: number;
        annually: number;
      };
    };
    livingExpenses: {
      otherExpenses: {
        monthly: number;
        annually: number;
      };
      healthcare: {
        monthly: number;
        notes: string;
      };
      remainingExpenses: {
        monthly: number;
        annually: number;
      };
      total: {
        monthly: number;
        annually: number;
      };
      footnote: string;
    };
    taxes: {
      incomeTaxes: {
        monthly: number;
        annually: number;
      };
    };
  };
}

const ExpensesLiabilitiesSection: React.FC<ExpensesLiabilitiesSectionProps> = ({ data }) => {
  // Loan Payment Data with exact values
  const loanItems = [
    {
      description: "Mortgage",
      monthly: data.loanPayments.mortgage.monthly,
      balance: data.loanPayments.mortgage.balance,
      interestRate: data.loanPayments.mortgage.interestRate,
      notes: null
    },
    {
      description: "SBA Loan",
      monthly: data.loanPayments.sbaLoan.monthly,
      balance: data.loanPayments.sbaLoan.balance,
      interestRate: data.loanPayments.sbaLoan.interestRate,
      notes: null
    },
    {
      description: "Credit Card Debt",
      monthly: data.loanPayments.creditCardDebt.monthly,
      balance: data.loanPayments.creditCardDebt.balance,
      interestRate: data.loanPayments.creditCardDebt.interestRate,
      notes: null
    }
  ];

  // Property Expenses Data
  const propertyItems = [
    {
      description: "Property Taxes",
      monthly: data.propertyExpenses.propertyTaxes.monthly,
      annually: data.propertyExpenses.propertyTaxes.annually,
      notes: data.propertyExpenses.propertyTaxes.notes
    },
    {
      description: "Insurance USAA",
      monthly: data.propertyExpenses.insurance.monthly,
      annually: data.propertyExpenses.insurance.annually,
      notes: data.propertyExpenses.insurance.notes
    },
    {
      description: "Upkeep & Maintenance",
      monthly: data.propertyExpenses.upkeep.monthly,
      annually: data.propertyExpenses.upkeep.annually,
      notes: data.propertyExpenses.upkeep.notes
    }
  ];

  // Living Expenses Data
  const livingExpenseItems = [
    {
      description: "Other Expenses",
      monthly: data.livingExpenses.otherExpenses.monthly,
      annually: data.livingExpenses.otherExpenses.annually,
      notes: null
    },
    {
      description: "Healthcare",
      monthly: data.livingExpenses.healthcare.monthly,
      annually: data.livingExpenses.healthcare.monthly * 12,
      notes: data.livingExpenses.healthcare.notes
    },
    {
      description: "Remaining Expenses*",
      monthly: data.livingExpenses.remainingExpenses.monthly,
      annually: data.livingExpenses.remainingExpenses.annually,
      notes: null
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <CreditCard className="h-6 w-6 text-wiw-purple mr-2" />
        <h2 className="text-2xl font-serif font-semibold text-wiw-dark-blue">Expenses & Liabilities</h2>
      </div>
      
      <Card className="p-6 border border-[#0EA5E9]">
        <div className="flex items-center mb-4">
          <CreditCard className="h-5 w-5 text-[#8B5CF6] mr-2" />
          <h3 className="text-lg font-serif font-semibold text-wiw-dark-blue">Loan Payments</h3>
        </div>
        <LoanPaymentsSection 
          loanItems={loanItems}
          totalMonthly={data.loanPayments.total}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <div className="flex items-center mb-4">
          <Home className="h-5 w-5 text-[#F97316] mr-2" />
          <h3 className="text-lg font-serif font-semibold text-wiw-dark-blue">Property Expenses</h3>
        </div>
        <PropertyExpensesSection
          expenseItems={propertyItems}
          totalMonthly={data.propertyExpenses.total.monthly}
          totalAnnually={data.propertyExpenses.total.annually}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <div className="flex items-center mb-4">
          <Briefcase className="h-5 w-5 text-[#D946EF] mr-2" />
          <h3 className="text-lg font-serif font-semibold text-wiw-dark-blue">Living Expenses</h3>
        </div>
        <LivingExpensesSection 
          expenseItems={livingExpenseItems}
          totalMonthly={data.livingExpenses.total.monthly}
          totalAnnually={data.livingExpenses.total.annually}
          footnote={data.livingExpenses.footnote}
        />
      </Card>

      <Card className="p-6 border border-[#0EA5E9]">
        <div className="flex items-center mb-4">
          <Receipt className="h-5 w-5 text-[#0EA5E9] mr-2" />
          <h3 className="text-lg font-serif font-semibold text-wiw-dark-blue">Taxes</h3>
        </div>
        <TaxesSection 
          monthly={data.taxes.incomeTaxes.monthly}
          annually={data.taxes.incomeTaxes.annually}
        />
      </Card>
    </div>
  );
};

export default ExpensesLiabilitiesSection;
