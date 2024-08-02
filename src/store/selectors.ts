import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getStatus = createSelector(
  getState,
  (widget) => widget.status,
);

export const getSimulationResult = createSelector(
  getState,
  (widget) => widget.simulation,
);

export const getOfferInstallments = createSelector(
  getState,
  (widget) => widget.offer?.installments,
);

export const getOffer = createSelector(
  getState,
  (widget) => widget.offer,
);

export const getUserRequest = createSelector(
  getState,
  (widget) => widget.requested,
);
