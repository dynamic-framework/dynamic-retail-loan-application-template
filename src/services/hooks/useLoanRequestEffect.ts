import { useEffect, useState } from 'react';

import { USER_ID } from '../../config/widgetConfig';
import { useAppDispatch } from '../../store/hooks';
import { setOffer, setRequestedInstallment } from '../../store/slice';
import errorHandler from '../../utils/errorHandler';
import { LoanRepository } from '../repositories';
import ApiError from '../utils/ApiError';

export default function useLoanRequestEffect() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const data = await LoanRepository.listOffer({
          userId: USER_ID,
          config: { abortSignal: abortController.signal },
        });
        dispatch(setOffer(data));
        dispatch(setRequestedInstallment(data.installments.minimum));
        setLoading(false);
      } catch (error) {
        if ((error as ApiError).name === 'CanceledError') return;

        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return {
    loading,
  };
}
