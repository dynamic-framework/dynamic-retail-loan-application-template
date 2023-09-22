import { DButton, DIcon } from '@dynamic-framework/ui-react';
import { Trans, useTranslation } from 'react-i18next';
import WidgetUtils from '../utils/widgetUtils';

export default function StatusRejected() {
  const { t } = useTranslation();
  const { goToPath } = WidgetUtils();

  return (
    <div className="col-12 col-lg-8 col-xl-6 d-flex flex-column gap-3 justify-content-center align-items-center">
      <div>
        <img
          src="https://cloud.modyocdn.com/uploads/a0d18d6a-c897-4247-84ba-ac114056deeb/original/Group_140.svg"
          alt="Rejected"
          height={256}
          width={256}
        />
      </div>
      <h5 className="fw-bold text-gray text-center">
        <Trans
          i18nKey="status.rejected.text"
          values={{ days: 30 }}
          components={{ bold: <span className="fs-4 text-dark fw-bold" /> }}
        />
      </h5>
      <div className="d-flex align-items-center gap-3 bg-white rounded-1 px-4 py-3 mb-3 shadow-sm">
        <DIcon icon="chat" size="24px" theme="secondary" />
        <p>{t('status.rejected.message')}</p>
      </div>
      <DButton
        onEventClick={() => goToPath('DASHBOARD')}
        text={t('status.rejected.button')}
        isPill
      />
    </div>
  );
}
