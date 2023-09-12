import { useTranslation } from 'react-i18next';

import ApplicationStatus from './components/ApplicationStatus';
import CreditSimulation from './components/CreditSimulation';
import SkeletonLoader from './components/SkeletonLoader';
import { useAppSelector } from './store/hooks';
import { getStatus } from './store/selectors';
import useLoanRequest from './hooks/useLoanRequest';

export default function App() {
  const status = useAppSelector(getStatus);
  const { t } = useTranslation();
  const { loading, apiError } = useLoanRequest();

  return (
    <div className="container py-3">
      <h1 className="fw-bold mb-4 fs-4">{t('title')}</h1>
      {loading && <SkeletonLoader />}
      {!loading && apiError && (
        <h2 className="fs-5 text-center my-3">
          {t('error')}
        </h2>
      )}
      {!loading && !apiError && (
        <div className="row justify-content-center my-3">
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
