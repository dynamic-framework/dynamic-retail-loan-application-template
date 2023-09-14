/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react';
import { liquidParser } from '@dynamic-framework/ui-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSimulationResult } from '../../store/selectors';
import errorHandler from '../../utils/errorHandler';
import { setStatus } from '../../store/slice';
import { LoanRepository } from '../repositories';

export default function useApplyLoan() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  // Check idempotencyKey
  const userId = liquidParser.parse('{{user.id}}');
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
          userId,
          accountId,
          installments.count,
          amount,
          { abortSignal: abortController.signal },

        );
        dispatch(setStatus('pending'));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        errorHandler(error);
      }
    },
    [userId, accountId, installments.count, amount, abortController.signal, dispatch],
  );

  return {
    callback,
    loading,
  };
}
