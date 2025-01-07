import { DCard } from '@dynamic-framework/ui-react';

import useLoanRequestEffect from '../services/hooks/useLoanRequestEffect';
import { useAppSelector } from '../store/hooks';
import { getStatus } from '../store/selectors';

import ApplicationLoader from './ApplicationLoader';
import ApplicationStatus from './ApplicationStatus';
import CreditSimulation from './CreditSimulation';

export default function ApplicationForm() {
  const status = useAppSelector(getStatus);
  const { loading } = useLoanRequestEffect();

  if (status) {
    return <ApplicationStatus status={status} />;
  }

  return (
    <DCard>
      <DCard.Body>
        {loading
          ? <ApplicationLoader />
          : <CreditSimulation />}
      </DCard.Body>
    </DCard>
  );
}
