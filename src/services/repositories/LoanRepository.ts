import type { GenericAbortSignal } from 'axios';

import ApiClient from '../ApiClient';
import {
  ApiLoanApply, ApiLoanOffer, ApiLoanOffers, ApiLoanSimulation,
} from '../api-interface';
import { loanRequestMapper, loanSimulationMapper } from '../mappers/loanMapper';

export async function listOffers(userId: string, config: { abortSignal: GenericAbortSignal }) {
  const { data } = await ApiClient.request<ApiLoanOffers>({
    url: '/account/loan/offers',
    method: 'GET',
    signal: config.abortSignal,
    params: { user_id: userId },
    headers: {
      Prefer: 'code=200, example=Offer list',
      Accept: 'application/json',
    },
  });
  return data.map((loanOffer: ApiLoanOffer) => loanRequestMapper(loanOffer));
}

export async function simulate(
  accountId: string,
  amount: number,
  installments: number,
  config: { abortSignal: GenericAbortSignal },
) {
  const { data } = await ApiClient.request<ApiLoanSimulation>({
    url: '/account/loan/simulation',
    method: 'GET',
    signal: config.abortSignal,
    headers: {
      Prefer: 'code=200',
    },
  });
  return loanSimulationMapper(data);
}

export async function applyOffer(
  userId: string,
  accountId: string,
  installments: number,
  amount: number,
  config: { abortSignal: GenericAbortSignal },
) {
  const { data } = await ApiClient.request<ApiLoanApply>({
    url: '/loan/account/apply',
    method: 'POST',
    signal: config.abortSignal,
    headers: {
      Prefer: 'code=200',
    },
    data: {
      userId,
      accountId,
      installments,
      amount,
    },
  });
  return data;
}
