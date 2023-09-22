export type ApiErrorItem = {
  status: string;
  code: string;
  title: string;
  messageCode: string;
  detail: string;
};

export type ApiLoanOffer = {
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

export type ApiLoanOffers = Array<ApiLoanOffer>;

export type ApiLoanSimulation = {
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

export type ApiLoanApply = {
  loanId: string,
  loanDisplayId: string,
  details: {
    accountId: string,
    amount: number,
    total: number,
    installments: {
      count: number,
      amount: number,
      period: string
    },
    interestRate: {
      annually: number,
      monthly: number
    }
  }
};
