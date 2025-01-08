export type ApiErrorItem = {
  status: string;
  code: string;
  title: string;
  message_code: string;
  detail: string;
};

export type ApiResponseWrapped<T> = {
  content: T;
};

export type ApiLoanOffer = {
  id: string;
  amount_range: {
    minimum: number;
    maximum: number;
  },
  term: {
    range: {
      minimum: number;
      maximum: number;
    },
    period: {
      id: string;
      name: string;
      code: string;
    }
  }
};

export type ApiLoanSimulation = {
  simulation_id: string;
  offer_id: string;
  loan_amount: number;
  loan_total: number;
  rate_settings: RateSettings;
  installments: Installments;
  transaction_fee: number;
};

export type Installments = {
  amount: number;
  term: Term;
};

export type Term = {
  count: number;
  description: string;
  period: Period;
};

export type Period = {
  id: string;
  name: string;
  code: string;
};

export type RateSettings = {
  monthly_rate: number;
  yearly_rate: number;
  calculation_method: string;
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
