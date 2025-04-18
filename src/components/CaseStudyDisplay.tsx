import React from 'react';
import { sampleCaseStudy } from '../data/sampleCaseStudy';
import { Card, CardContent } from './ui/card';
import KeyInsightsSection from './KeyInsightsSection';
import ScenarioSection from './ScenarioSection';
import MethodologySection from './MethodologySection';
import IncomeInvestmentsSection from './IncomeInvestmentsSection';
import ExpensesLiabilitiesSection from './ExpensesLiabilitiesSection';
import BusinessPLSection from './BusinessPLSection';

interface CaseStudy {
  scenarioFor: string;
  clientName: string;
  date: string;
  income: any;
  investments: any;
  loanPayments: any;
  propertyExpenses: any;
  propertyValues: any;
  livingExpenses: any;
  taxes: any;
  businessPL: any;
  alimony?: any;
  additions?: any;
}

interface CaseStudyDisplayProps {
  data: CaseStudy;
  activeTab: string;
}

const CaseStudyDisplay: React.FC<CaseStudyDisplayProps> = ({
  data,
  activeTab
}) => {
  if (activeTab === "overview") {
    return (
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-serif font-semibold text-wiw-dark-blue mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Pam is preparing for a likely divorce from her husband, Bob, and wants a clearer picture of her current financial
            landscape to help her negotiate a fair and informed division of assets. She is also exploring adjustments to her business
            income and is using What-If Wealth Scenarios™ to test various pricing strategies and revenue projections.
          </p>
          <p className="text-gray-700 mb-4">
            Pam has three powerful components that may support her long-term financial well-being: Options, Assets, and Time.
            Through scenario modeling, she is gaining insight into how different choices — primarily around income planning and
            settlement structure — could impact her future.
          </p>
          <p className="text-gray-700">
            The goal is to help Pam visualize a range of outcomes so she can feel more confident in her next steps and prepare for
            discussions with legal and financial professionals.
          </p>
          
          <h2 className="text-xl font-serif font-semibold text-wiw-dark-blue mb-4 mt-8">Insights Explored</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Potential income scenarios based on business pricing adjustments.</li>
            <li>Potential asset division and impact on mid-term net worth.</li>
            <li>Housing decisions: renting vs. continuing to own.</li>
          </ul>

          <div className="bg-wiw-light-blue/10 border border-wiw-light-blue/30 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-serif font-semibold text-wiw-dark-blue mb-3">Understanding Your What-If Scenarios</h3>
            <p className="text-gray-700 mb-3">
              Your What-If Scenarios are designed to help you explore how different financial decisions might impact your future. 
              These are not predictions—they are thoughtful projections based on the information you provided and grounded in 
              realistic assumptions.
            </p>
            <p className="text-gray-700 mb-3">
              This is your space to get curious, test ideas, and see how choices—like changing your income, adjusting spending, 
              or reallocating assets—could affect your financial path. The goal isn't to be exact, but to give you insight, clarity, 
              and confidence as you navigate important life decisions.
            </p>
            <p className="text-gray-700">Remember: Even small changes can lead to big differences over time.</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (activeTab === "methodology") {
    return <MethodologySection />;
  }
  
  if (activeTab === "income-investments") {
    return <IncomeInvestmentsSection data={data} />;
  }
  
  if (activeTab === "expenses-liabilities") {
    return <ExpensesLiabilitiesSection data={data} />;
  }
  
  if (activeTab === "business-pl") {
    return (
      <Card className="p-6 border border-[#0EA5E9]">
        <BusinessPLSection 
          items={data.businessPL.expenses.feed ? [
            {
              description: "Feed",
              monthly: data.businessPL.expenses.feed.monthly,
              annually: data.businessPL.expenses.feed.annually,
              notes: null
            },
            {
              description: "Vet Bills",
              monthly: data.businessPL.expenses.vetBills.monthly,
              annually: data.businessPL.expenses.vetBills.annually,
              notes: null
            },
            {
              description: "Bedding and supplements",
              monthly: data.businessPL.expenses.beddingSupplements.monthly,
              annually: data.businessPL.expenses.beddingSupplements.annually,
              notes: null
            },
            {
              description: "Unplanned Expenses",
              monthly: data.businessPL.expenses.unplannedExpenses.monthly,
              annually: data.businessPL.expenses.unplannedExpenses.annually,
              notes: null
            }
          ] : []}
          totalExpenses={{
            monthly: data.businessPL.expenses.totalHorseBusiness.monthly,
            annually: data.businessPL.expenses.totalHorseBusiness.annually
          }}
          income={{
            monthly: data.businessPL.income.horseTraining.monthly,
            annually: data.businessPL.income.horseTraining.annually
          }}
          profits={{
            monthly: data.businessPL.profits.monthly,
            annually: data.businessPL.profits.annually
          }}
        />
      </Card>
    );
  }
  
  if (activeTab === "scenarios") {
    return <ScenarioSection />;
  }
  
  if (activeTab === "insights") {
    return <KeyInsightsSection />;
  }
  
  return null;
};

export default CaseStudyDisplay;
