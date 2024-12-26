import {
  ApiLoanApply,
  ApiLoanOffer,
  ApiLoanSimulation,
  ApiResponseWrapped,
} from '../api-interface';
import ApiClient from '../clients/apiClient';
import { loanRequestMapper, loanSimulationMapper } from '../mappers/loanMapper';

import { RepositoryParams } from './repository';

export async function listOffer(
  params: RepositoryParams<{
    userId: string,
  }>,
) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiLoanOffer>>({
    url: '/loan-offers/LOAN/LOAN',
    method: 'GET',
    signal: params.config?.abortSignal,
    params: {
      userId: params.userId,
    },
  });
  return loanRequestMapper(data.content);
}

export async function simulate(
  params: RepositoryParams<{
    accountId: string,
    amount: number,
    installments: number,
  }>,
) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiLoanSimulation>>({
    url: 'loan-offers/LOAN/LOAN/offer/simulations',
    method: 'POST',
    signal: params.config?.abortSignal,
    data: {
      accountId: params.accountId,
      amount: params.amount,
      installments: params.installments,
    },
  });
  return loanSimulationMapper(data.content);
}

export async function applyOffer(
  params: RepositoryParams<{
    userId: string,
    accountId: string,
    installments: number,
    amount: number,
  }>,
) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiLoanApply>>({
    url: '/generics',
    method: 'POST',
    signal: params.config?.abortSignal,
    data: {
      userId: params.userId,
      accountId: params.accountId,
      installments: params.installments,
      amount: params.amount,
    },
  });
  return data;
}
