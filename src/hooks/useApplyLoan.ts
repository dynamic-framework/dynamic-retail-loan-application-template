/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react';
import { liquidParser } from '@dynamic-framework/ui-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getSimulationResult } from '../store/selectors';
import errorHandler from '../utils/errorHandler';
import { setStatus } from '../store/slice';

export default function useApplyLoan() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  // Check idempotencyKey
  const userId = liquidParser.parse('{{user.id}}');
  const simulation = useAppSelector(getSimulationResult);
  const {
    accountId,
    amount,
    installments,
  } = simulation;

  const applyLoan = useCallback(
    async () => {
      const {
        perform,
      } = LoanRepository.apply(
        userId,
        accountId,
        installments.count,
        amount,
      );
      try {
        setLoading(true);
        const data = await perform();
        setLoading(false);
        dispatch(setStatus('pending'));
        window.prepareNotification(data.loanId);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setLoading(false);
        errorHandler(error);
      }
    },
    [userId, accountId, installments.count, amount, dispatch],
  );

  return {
    applyLoan,
    loading,
  };
}
