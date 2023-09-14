export type LoanOffer = {
  accountId: string;
  name: string;
  type: string;
  minAmount: number;
  maxAmount: number;
  installments: {
    minimum: number;
    maximum: number;
    period: string;
  }
};

export type LoanOffers = Array<LoanOffer>;

export type LoanSimulation = {
  accountId: string;
  amount: number;
  total: number;
  installments: {
    count: number;
    amount: number;
    period: string;
  };
  interestRate: {
    annually: number;
    monthly: number;
  }
};
