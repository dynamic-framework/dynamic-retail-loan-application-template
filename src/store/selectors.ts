import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getStatus = createDraftSafeSelector(
  getState,
  (widget) => widget.status,
);

export const getSimulationResult = createDraftSafeSelector(
  getState,
  (widget) => widget.simulation,
);

export const getOfferInstallments = createDraftSafeSelector(
  getState,
  (widget) => widget.offer?.installments,
);

export const getOffer = createDraftSafeSelector(
  getState,
  (widget) => widget.offer,
);

export const getUserRequest = createDraftSafeSelector(
  getState,
  (widget) => widget.requested,
);
