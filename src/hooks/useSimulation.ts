import { useCallback, useState } from 'react';

import { LoanRepository } from '@modyo-dynamic/modyo-service-retail';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getOffer, getUserRequest } from '../store/selectors';
import { setSimulation } from '../store/slice';
import errorHandler from '../utils/errorHandler';

export default function useSimulation() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { amount, installment } = useAppSelector(getUserRequest);
  const { accountId } = useAppSelector(getOffer);

  const simulate = useCallback(
    async () => {
      const {
        perform,
      } = LoanRepository.simulation(accountId, amount ?? 0, installment);
      try {
        setLoading(true);
        const data = await perform();
        dispatch(setSimulation(data));
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setLoading(false);
        errorHandler(error);
      }
    },
    [dispatch, accountId, amount, installment],
  );

  return {
    simulate,
    loading,
  };
}
