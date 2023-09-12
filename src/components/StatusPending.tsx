import { DAlert, DButton, liquidParser } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

export default function StatusPending() {
  const { t } = useTranslation();

  const goToHome = () => {
    const urlDashboard = `${liquidParser.parse('{{site.url}}')}/${liquidParser.parse('{{vars.dashboard-path}}')}`;
    window.location.href = urlDashboard;
  };

  return (
    <div className="col-12 col-lg-8 col-xl-6 d-flex flex-column gap-3 justify-content-center align-items-center">
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
        onEventClick={goToHome}
        text={t('status.pending.button')}
        isPill
      />
    </div>
  );
}
