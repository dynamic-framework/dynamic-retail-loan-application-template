import StatusPending from './StatusPending';
import StatusRejected from './StatusRejected';

type Props = {
  status: 'rejected' | 'pending';
};

export default function ApplicationStatus({ status }: Props) {
  return (
    <>
      {status === 'rejected' && (<StatusRejected />)}
      {status === 'pending' && (<StatusPending />)}
    </>
  );
}
