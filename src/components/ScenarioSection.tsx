
import React from 'react';
import ScenarioCard from './ScenarioCard';

const scenariosData = [{
  number: 1,
  title: "Starting State",
  subtitle: "Income: $80,000 per year",
  highlights: ["Solid net worth that grows over time", "No changes to existing income or property"],
  considerations: ["Pam is underpaid for her skill and contributions", "Short on cash prior to taking Social Security", "Carrying high-interest credit card debt", "No cushion in next six years for unexpected expenses", "Does not address the divorce"],
  tableData: [{
    age: 61,
    income: 80000,
    expenses: 89892,
    netIncome: -9892,
    realEstate: 375000,
    cash: 87,
    debt: 56785,
    netWorth: 318302,
    cumulativeSavingsTarget: -9892
  }, {
    age: 62,
    income: 82280,
    expenses: 92335,
    netIncome: -10055,
    realEstate: 386250,
    cash: -10492,
    debt: 55521,
    netWorth: 320237,
    cumulativeSavingsTarget: -19947
  }, {
    age: 63,
    income: 84625,
    expenses: 94850,
    netIncome: -10225,
    realEstate: 397838,
    cash: -21780,
    debt: 54208,
    netWorth: 321849,
    cumulativeSavingsTarget: -30172
  }, {
    age: 64,
    income: 87037,
    expenses: 97440,
    netIncome: -10403,
    realEstate: 409773,
    cash: -33820,
    debt: 52842,
    netWorth: 323111,
    cumulativeSavingsTarget: -40575
  }, {
    age: 65,
    income: 89517,
    expenses: 100106,
    netIncome: -10589,
    realEstate: 422066,
    cash: -46657,
    debt: 51423,
    netWorth: 323986,
    cumulativeSavingsTarget: -51164
  }, {
    age: 66,
    income: 92069,
    expenses: 102852,
    netIncome: -10783,
    realEstate: 434728,
    cash: -60341,
    debt: 49946,
    netWorth: 324441,
    cumulativeSavingsTarget: -61947
  }, {
    age: 67,
    income: 125693,
    expenses: 105679,
    netIncome: 20013,
    realEstate: 447770,
    cash: -43344,
    debt: 48410,
    netWorth: 356015,
    cumulativeSavingsTarget: -41934
  }, {
    age: 68,
    income: 129166,
    expenses: 108590,
    netIncome: 20576,
    realEstate: 461203,
    cash: -24935,
    debt: 46810,
    netWorth: 389457,
    cumulativeSavingsTarget: -21358
  }, {
    age: 69,
    income: 132736,
    expenses: 111588,
    netIncome: 21149,
    realEstate: 475039,
    cash: -5934,
    debt: 45144,
    netWorth: 423961,
    cumulativeSavingsTarget: -209
  }]
}, {
  number: 2,
  title: "Increase Income to $98,000 per year",
  subtitle: "Pay Bob $1,200 per month for 10 years (adjusts for inflation)\nBob pays Pam's healthcare insurance until Medicare kicks in",
  highlights: ["Pam is paid for her time and skill", "Much better cash position in short term", "Net worth increases"],
  considerations: ["Cash remains a little tight", "No cushion next six years for unplanned expenses", "No payoff for high-interest credit card for until SS begins"],
  tableData: [{
    age: 61,
    income: 98000,
    expenses: 104292,
    netIncome: -6292,
    realEstate: 375000,
    cash: 3877,
    debt: 56785,
    netWorth: 322092,
    cumulativeSavingsTarget: -6292
  }, {
    age: 62,
    income: 100793,
    expenses: 107145,
    netIncome: -6352,
    realEstate: 386250,
    cash: -2616,
    debt: 55521,
    netWorth: 328113,
    cumulativeSavingsTarget: -12644
  }, {
    age: 63,
    income: 103666,
    expenses: 110083,
    netIncome: -6417,
    realEstate: 397838,
    cash: -9501,
    debt: 54208,
    netWorth: 334128,
    cumulativeSavingsTarget: -19061
  }, {
    age: 64,
    income: 106620,
    expenses: 113106,
    netIncome: -6486,
    realEstate: 409773,
    cash: -16804,
    debt: 52842,
    netWorth: 340127,
    cumulativeSavingsTarget: -25547
  }, {
    age: 65,
    income: 109659,
    expenses: 116219,
    netIncome: -6561,
    realEstate: 422066,
    cash: -24559,
    debt: 51423,
    netWorth: 346092,
    cumulativeSavingsTarget: -32108
  }, {
    age: 66,
    income: 112784,
    expenses: 119424,
    netIncome: -6640,
    realEstate: 434728,
    cash: -32768,
    debt: 49946,
    netWorth: 352014,
    cumulativeSavingsTarget: -38748
  }, {
    age: 67,
    income: 146398,
    expenses: 122174,
    netIncome: 24275,
    realEstate: 447770,
    cash: -10131,
    debt: 48410,
    netWorth: 389228,
    cumulativeSavingsTarget: -14474
  }, {
    age: 68,
    income: 151079,
    expenses: 126121,
    netIncome: 24959,
    realEstate: 461203,
    cash: 14321,
    debt: 46810,
    netWorth: 428713,
    cumulativeSavingsTarget: 10485
  }, {
    age: 69,
    income: 155274,
    expenses: 129618,
    netIncome: 25656,
    realEstate: 475039,
    cash: 40693,
    debt: 45144,
    netWorth: 470588,
    cumulativeSavingsTarget: 36141
  }]
}, {
  number: 3,
  title: "Sell the House",
  subtitle: "Pay Bob lump sum of $122,500\nBob pays health insurance until Pam turns 65",
  highlights: ["Pam has cash flow and an investment portfolio", "One-time payout to Bob means financial obligation is complete", "High-interest credit card is paid off", "Freedom from expenses of home ownership"],
  considerations: ["Selling the house is a disruption", "Pam loses the stability of owning a home", "Housing costs could increase over time"],
  tableData: [{
    age: 61,
    income: 98000,
    expenses: 101484,
    netIncome: -3484,
    realEstate: 375000,
    cash: 6833,
    debt: 56785,
    netWorth: 325048,
    cumulativeSavingsTarget: -3484
  }, {
    age: 62,
    income: 100793,
    expenses: 104257,
    netIncome: -3464,
    realEstate: 0,
    cash: 248528,
    debt: 55521,
    netWorth: 193007,
    cumulativeSavingsTarget: -6948
  }, {
    age: 63,
    income: 103666,
    expenses: 107112,
    netIncome: -3447,
    realEstate: 0,
    cash: 257326,
    debt: 54208,
    netWorth: 203118,
    cumulativeSavingsTarget: -10395
  }, {
    age: 64,
    income: 106620,
    expenses: 110051,
    netIncome: -3431,
    realEstate: 0,
    cash: 266581,
    debt: 52842,
    netWorth: 213739,
    cumulativeSavingsTarget: -13826
  }, {
    age: 65,
    income: 109659,
    expenses: 113077,
    netIncome: -3419,
    realEstate: 0,
    cash: 276311,
    debt: 51423,
    netWorth: 224888,
    cumulativeSavingsTarget: -17245
  }, {
    age: 66,
    income: 112784,
    expenses: 116193,
    netIncome: -3409,
    realEstate: 0,
    cash: 286538,
    debt: 49946,
    netWorth: 236592,
    cumulativeSavingsTarget: -20653
  }, {
    age: 67,
    income: 146998,
    expenses: 119400,
    netIncome: 27598,
    realEstate: 0,
    cash: 328464,
    debt: 48410,
    netWorth: 280054,
    cumulativeSavingsTarget: 6945
  }, {
    age: 68,
    income: 151079,
    expenses: 122702,
    netIncome: 28377,
    realEstate: 0,
    cash: 373264,
    debt: 46810,
    netWorth: 326454,
    cumulativeSavingsTarget: 35322
  }, {
    age: 69,
    income: 155274,
    expenses: 126102,
    netIncome: 29172,
    realEstate: 0,
    cash: 421099,
    debt: 45144,
    netWorth: 375955,
    cumulativeSavingsTarget: 64494
  }]
}];

const ScenarioSection: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-wiw-light-blue/20">
      <h2 className="text-xl font-serif font-semibold text-wiw-dark-blue mb-6 pb-2 border-b border-wiw-light-blue">What-if Scenarios</h2>
      
      <div className="grid grid-cols-1 gap-8 mb-8">
        {scenariosData.map(scenario => (
          <ScenarioCard 
            key={scenario.number} 
            number={scenario.number} 
            title={scenario.title} 
            subtitle={scenario.subtitle} 
            highlights={scenario.highlights} 
            considerations={scenario.considerations} 
            tableData={scenario.tableData} 
          />
        ))}
      </div>
    </div>
  );
};

export default ScenarioSection;
