import { DAlert, DButton } from '@dynamic-framework/ui-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_PATH, SITE_URL } from '../config/widgetConfig';

export default function StatusPending() {
  const { t } = useTranslation();

  const handleContinue = useCallback(() => {
    window.location.href = `${SITE_URL}/${SITE_PATH.DASHBOARD}`;
  }, []);

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
      <DButton
        onClick={handleContinue}
        text={t('status.pending.button')}
      />
    </div>
  );
}
