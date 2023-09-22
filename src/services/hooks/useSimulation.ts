import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getOffer, getUserRequest } from '../../store/selectors';
import { LoanRepository } from '../repositories';
import { setSimulation } from '../../store/slice';
import errorHandler from '../../utils/errorHandler';

export default function useSimulation() {
  const [loading, setLoading] = useState(false);
  const { amount, installment } = useAppSelector(getUserRequest);
  const { accountId } = useAppSelector(getOffer);
  const dispatch = useAppDispatch();
  const abortController = new AbortController();

  const callback = useCallback(
    async () => {
      try {
        setLoading(true);
        const data = await LoanRepository.simulate(
          accountId,
          amount ?? 0,
          installment,
          { abortSignal: abortController.signal },
        );
        dispatch(setSimulation(data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        errorHandler(error);
      }
    },
    [accountId, amount, installment, abortController.signal, dispatch],
  );

  return {
    callback,
    loading,
  };
}
