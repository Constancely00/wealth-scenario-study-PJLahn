
export const sampleCaseStudy = {
  scenarioFor: "Scenario Study For",
  clientName: "Pam Fakins",
  date: "4/22/2025",
  income: {
    items: [
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
    ],
    totalMonthly: 2612,
    totalAnnually: 31344
  },
  investments: {
    iraSavings: 10000,
    other: 0,
    total: 10000
  },
  loanPayments: {
    mortgage: {
      monthly: 0,
      balance: 0,
      interestRate: 0.00
    },
    sbaLoan: {
      monthly: 250,
      balance: 49000,
      interestRate: 3.75
    },
    creditCardDebt: {
      monthly: 300,
      balance: 9000,
      interestRate: 17.49
    },
    total: 550
  },
  propertyExpenses: {
    propertyTaxes: {
      monthly: 334,
      annually: 4008,
      notes: "(estimate)"
    },
    insurance: {
      monthly: 250,
      annually: 3000,
      notes: "(estimate)"
    },
    upkeep: {
      monthly: 250,
      annually: 3000,
      notes: ""
    },
    total: {
      monthly: 834,
      annually: 10008
    }
  },
  propertyValues: {
    primaryPropertyValue: 375000,
    netOfMortgage: 375000
  },
  livingExpenses: {
    otherExpenses: {
      monthly: 0,
      annually: 0
    },
    healthcare: {
      monthly: 500,
      annually: 6000,
      notes: "this seems low?"
    },
    remainingExpenses: {
      monthly: 1100,
      annually: 13200
    },
    total: {
      monthly: 1600,
      annually: 19200
    },
    footnote: "Everything else! Groceries, Dining Out, Utilities, Clothing, Gym, Entertainment, Gifts, Phone Etc."
  },
  taxes: {
    incomeTaxes: {
      monthly: 90,
      annually: 1084
    }
  },
  businessPL: {
    expenses: {
      feed: {
        monthly: 833,
        annually: 10000
      },
      vetBills: {
        monthly: 1417,
        annually: 17000
      },
      beddingSupplements: {
        monthly: 1667,
        annually: 20000
      },
      unplannedExpenses: {
        monthly: 0,
        annually: 0
      },
      totalHorseBusiness: {
        monthly: 3917,
        annually: 47000
      }
    },
    income: {
      horseTraining: {
        monthly: 6667,
        annually: 80000
      }
    },
    profits: {
      monthly: 2750,
      annually: 33000
    }
  }
};
