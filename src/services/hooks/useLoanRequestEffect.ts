import { useEffect, useState } from 'react';
import { liquidParser } from '@dynamic-framework/ui-react';
import { useAppDispatch } from '../../store/hooks';
import { LoanRepository } from '../repositories';
import { setOffer, setRequestedInstallment } from '../../store/slice';
import errorHandler from '../../utils/errorHandler';

export default function useLoanRequestEffect() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const userId = liquidParser.parse('{{user.id}}');

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const data = await LoanRepository.listOffers(
          userId,
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
  }, [dispatch, userId]);

  return {
    loading,
  };
}
