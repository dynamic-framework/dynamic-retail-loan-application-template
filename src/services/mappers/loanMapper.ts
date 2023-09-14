import { ApiLoanOffer, ApiLoanSimulation } from '../api-interface';
import type { LoanOffer, LoanSimulation } from '../interface';

export function loanRequestMapper(apiLoanOffer: ApiLoanOffer): LoanOffer {
  return {
    ...apiLoanOffer,
  };
}

export function loanSimulationMapper(apiSimulation: ApiLoanSimulation): LoanSimulation {
  return {
    ...apiSimulation,
  };
}
