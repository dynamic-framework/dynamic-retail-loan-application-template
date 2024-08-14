import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { LoanOffer, LoanSimulation } from '../services/interface';

export type ViewStatus = 'rejected' | 'pending';

export type WidgetState = {
  status?: ViewStatus;
  offer: LoanOffer;
  requested: {
    amount: number | undefined;
    installment: number;
  };
  simulation?: LoanSimulation;
};

const initialState = {
  requested: {
    amount: 0,
    installment: 0,
  },
  minAvailableInstallments: 0,
  maxAvailableInstallments: 0,
  offer: {
    accountId: '',
    name: '',
    type: '',
    minAmount: 0,
    maxAmount: 0,
    installments: {
      minimum: 0,
      maximum: 0,
      period: '',
    },
  },
} as WidgetState;

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<ViewStatus | undefined>) {
      state.status = action.payload;
    },
    setRequestedAmount(state, action: PayloadAction<number | undefined>) {
      state.requested.amount = action.payload;
    },
    setRequestedInstallment(state, action: PayloadAction<number>) {
      state.requested.installment = action.payload;
    },
    setOffer(state, action: PayloadAction<LoanOffer>) {
      state.offer = action.payload;
    },
    setSimulation(state, action: PayloadAction<LoanSimulation>) {
      state.simulation = action.payload;
    },
  },
});

export const {
  setStatus,
  setRequestedAmount,
  setRequestedInstallment,
  setOffer,
  setSimulation,
} = slice.actions;
export default slice.reducer;
