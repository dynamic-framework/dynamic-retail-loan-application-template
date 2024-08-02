/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react';

import { USER_ID } from '../../config/widgetConfig';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSimulationResult } from '../../store/selectors';
import { setStatus } from '../../store/slice';
import errorHandler from '../../utils/errorHandler';
import { LoanRepository } from '../repositories';

export default function useApplyLoan() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const simulation = useAppSelector(getSimulationResult);
  const abortController = new AbortController();
  const {
    accountId,
    amount,
    installments,
  } = simulation!;

  const callback = useCallback(
    async () => {
      try {
        setLoading(true);
        await LoanRepository.applyOffer(
          USER_ID,
          accountId,
          installments.count,
          amount,
          { abortSignal: abortController.signal },

        );
        dispatch(setStatus('pending'));
        window.prepareNotification?.('123');
        setLoading(false);
      } catch (error) {
        setLoading(false);
        errorHandler(error);
      }
    },
    [accountId, installments.count, amount, abortController.signal, dispatch],
  );

  return {
    callback,
    loading,
  };
}
