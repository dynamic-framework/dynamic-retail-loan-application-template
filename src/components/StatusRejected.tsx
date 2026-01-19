import { DIcon } from '@dynamic-framework/ui-react';
import { Trans, useTranslation } from 'react-i18next';

import { SITE_PATH, SITE_URL } from '../config/widgetConfig';

export default function StatusRejected() {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
      <div>
        <DIcon
          icon="CalendarX2"
          color="warning"
          size="5rem"
        />
      </div>
      <h5 className="fw-bold text-gray text-center">
        <Trans
          i18nKey="status.rejected.text"
          values={{ days: 30 }}
          components={{ bold: <span className="fs-4 text-dark fw-bold" /> }}
        />
      </h5>
      <div className="d-flex align-items-center gap-4 bg-white rounded-1 px-6 py-4 mb-4 shadow-sm">
        <DIcon
          icon="Chat"
          size="24px"
          color="secondary"
        />
        <p className="mb-0">{t('status.rejected.message')}</p>
      </div>
      <a
        href={`${SITE_URL}/${SITE_PATH.DASHBOARD}`}
        className="btn btn-primary"
      >
        {t('status.rejected.button')}
      </a>
    </div>
  );
}
