import { DAlert } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { SITE_PATH, SITE_URL } from '../config/widgetConfig';

export default function StatusPending() {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
      <div className="d-block">
        <img
          src="https://cloud.modyocdn.com/uploads/5f54a55e-6806-4e8a-92fd-252d7954cb15/original/Frame_140.svg"
          alt="Pending"
          height={256}
        />
      </div>
      <h2 className="fs-5 fw-bold text-gray text-center">
        {t('status.pending.text')}
      </h2>
      <DAlert
        icon="clock"
      >
        {t('status.pending.message')}
      </DAlert>
      <a
        href={`${SITE_URL}/${SITE_PATH.DASHBOARD}`}
        className="btn btn-primary"
      >
        {t('status.pending.button')}
      </a>
    </div>
  );
}
