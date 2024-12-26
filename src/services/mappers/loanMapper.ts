import { ApiLoanOffer, ApiLoanSimulation } from '../api-interface';
import type { LoanOffer, LoanSimulation } from '../interface';

export function loanRequestMapper(apiLoanOffer: ApiLoanOffer): LoanOffer {
  return {
    accountId: apiLoanOffer.id,
    minAmount: apiLoanOffer.amount_range.minimum,
    maxAmount: apiLoanOffer.amount_range.maximum,
    installments: {
      minimum: apiLoanOffer.term.range.minimum,
      maximum: apiLoanOffer.term.range.maximum,
      period: apiLoanOffer.term.period.name,
    },
  };
}

export function loanSimulationMapper(apiSimulation: ApiLoanSimulation): LoanSimulation {
  return {
    accountId: apiSimulation.simulation_id,
    amount: apiSimulation.loan_amount,
    total: apiSimulation.loan_total,
    installments: {
      count: apiSimulation.installments.term.count,
      amount: apiSimulation.installments.amount,
      period: apiSimulation.installments.term.period.name,
    },
    interestRate: {
      annually: apiSimulation.rate_settings.yearly_rate,
      monthly: apiSimulation.rate_settings.monthly_rate,
    },
  };
}
