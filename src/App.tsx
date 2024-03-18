import { useDContext } from '@dynamic-framework/ui-react';
import { useEffect } from 'react';
import ApplicationStatus from './components/ApplicationStatus';
import CreditSimulation from './components/CreditSimulation';
import SkeletonLoader from './components/SkeletonLoader';
import { useAppSelector } from './store/hooks';
import { getStatus } from './store/selectors';
import useLoanRequestEffect from './services/hooks/useLoanRequestEffect';
import { SITE_LANG, VARS_CURRENCY } from './config/widgetConfig';

export default function App() {
  const status = useAppSelector(getStatus);
  const { loading } = useLoanRequestEffect();
  const { setContext } = useDContext();

  useEffect(() => {
    setContext({
      language: SITE_LANG,
      currency: VARS_CURRENCY,
    });
  }, [setContext]);

  return (
    <div className="container py-4">
      {loading
        ? <SkeletonLoader />
        : (
          <div className="row justify-content-center my-4">
            {status
              ? <ApplicationStatus status={status} />
              : (
                <div className="col-lg-8 col-xl-6">
                  <CreditSimulation />
                </div>
              )}
          </div>
        )}
    </div>
  );
}
