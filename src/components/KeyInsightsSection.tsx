import React from 'react';

const KeyInsightsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-serif font-semibold text-wiw-dark-blue mb-4">Key Insights</h2>
      
      <div className="bg-gradient-to-r from-wiw-light-blue/10 to-white p-6 rounded-lg border-2 border-wiw-dark-blue/30 mt-8 shadow-md">
        <h3 className="text-xl font-serif font-semibold text-wiw-dark-blue mb-3">What Stands Out for Pam</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Pam is currently underpaid for the high-value service she provides her community.</li>
          <li>She has built a strong asset in her home – Pam owns it outright and has done considerable work to improve the property. The cost of living is very low for this home.</li>
          <li>Pam's divorce from Bob could mean either an increase in her monthly expenses -which puts pressure on her cash flow- or a lump sum payout which could require selling her house.</li>
          <li>Based on the scenario modeling, regular alimony payments may be difficult for Pam to sustain in the near term due to limited cash flow. However, the situation is expected to improve once Social Security benefits begin in approximately six years.</li>
          <li>Pam could consider a small home equity loan as a bridge for the next six years. She could use this to pay off her high-interest credit card and to finance her short-term cash gap. Pam would accelerate payments on the HELOC as soon as she began collecting social security.</li>
          <li>Some divorce settlements allow for structured or deferred support arrangements, where payments begin later or start at a lower level and increase over time. These types of arrangements are typically negotiated during the settlement process and require legal approval.</li>
          <li>Pam is encouraged to seek legal counsel regarding her potential divorce settlement, as the financial outcomes could differ significantly from the assumptions used in these scenarios. Key considerations may include the division of debt and assets, spousal support, and the impact of her having covered the majority of household expenses during the marriage.</li>
        </ul>
      </div>

      <div className="text-xs text-gray-500 mt-4 p-3 border border-gray-200 rounded bg-gray-50">
        <p className="font-medium mb-1">Please Note:</p>
        <ul className="list-disc pl-4 space-y-0.5">
          <li>These assumptions are not predictions, and future market conditions or life events may vary significantly.</li>
          <li>The purpose of this tool is to help you visualize financial possibilities — not to guarantee outcomes.</li>
          <li>All figures are estimates, meant to support informed decision-making through exploration and planning.</li>
          <li>What-If Wealth Scenarios™ does not provide financial, investment, legal, or tax advice.</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyInsightsSection;
