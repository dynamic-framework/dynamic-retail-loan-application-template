import { useEffect, useState } from 'react';
import { liquidParser } from '@dynamic-framework/ui-react';
import { useAppDispatch } from '../store/hooks';
import {
  setOffer, setRequestedInstallment,
} from '../store/slice';
import errorHandler from '../utils/errorHandler';

export default function useLoanRequest() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const userId = liquidParser.parse('{{user.id}}');
    const {
      perform,
      abort,
    } = LoanRepository.offers(userId, []);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      setLoading(true);
      try {
        const data = await perform();
        const offer = data[0];
        dispatch(setOffer(offer));
        dispatch(setRequestedInstallment(offer.installments.minimum));
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setApiError(error);
        errorHandler(error);
      }
    })();
    return () => {
      abort();
    };
  }, [dispatch]);

  return {
    loading,
    apiError,
  };
}
