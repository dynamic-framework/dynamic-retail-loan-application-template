import { useEffect, useState } from 'react';

import { USER_ID } from '../../config/widgetConfig';
import { useAppDispatch } from '../../store/hooks';
import { setOffer, setRequestedInstallment } from '../../store/slice';
import errorHandler from '../../utils/errorHandler';
import { LoanRepository } from '../repositories';

export default function useLoanRequestEffect() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const data = await LoanRepository.listOffers(
          USER_ID,
          { abortSignal: abortController.signal },
        );
        const offer = data[0];
        dispatch(setOffer(offer));
        dispatch(setRequestedInstallment(offer.installments.minimum));
        setLoading(false);
      } catch (error) {
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
