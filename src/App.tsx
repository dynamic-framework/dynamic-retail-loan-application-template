import ApplicationStatus from './components/ApplicationStatus';
import CreditSimulation from './components/CreditSimulation';
import SkeletonLoader from './components/SkeletonLoader';
import { useAppSelector } from './store/hooks';
import { getStatus } from './store/selectors';
import useLoanRequestEffect from './services/hooks/useLoanRequestEffect';

export default function App() {
  const status = useAppSelector(getStatus);
  const { loading } = useLoanRequestEffect();

  return (
    <div className="container py-3">
      {loading
        ? <SkeletonLoader />
        : (
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
