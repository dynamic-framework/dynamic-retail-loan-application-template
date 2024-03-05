/* eslint-disable jsx-a11y/anchor-has-content */
import {
  DButton,
  DCurrencyText,
  DIcon,
  useDOffcanvasContext,
  useDModalContext,
  useFormatCurrency,
  DTooltip,
} from '@dynamic-framework/ui-react';
import { Trans, useTranslation } from 'react-i18next';

import { useAppSelector } from '../store/hooks';
import { getSimulationResult } from '../store/selectors';
import useApplyLoan from '../services/hooks/useApplyLoan';

export default function AdvancedSimulation() {
  const { loading, callback: applyLoan } = useApplyLoan();
  const simulation = useAppSelector(getSimulationResult);
  const {
    amount,
    total: totalDue,
    installments: {
      count: term,
      amount: monthlyPayment,
    },
    interestRate,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = simulation!;
  const { openModal } = useDModalContext();
  const { openOffcanvas } = useDOffcanvasContext();
  const { t } = useTranslation();
  const { format } = useFormatCurrency();

  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="fw-bold fs-6">{t('conditions')}</h2>
      <div className="bg-gray-200 text-center p-3 rounded-1 d-flex gap-3 flex-column">
        <p>{t('yourPayment')}</p>
        <DCurrencyText value={monthlyPayment} className="fs-3 fw-bold" />
      </div>
      <div className="bg-secondary-soft p-3 rounded-1 d-flex flex-column gap-2">
        {amount && (
          <div className="d-flex justify-content-between">
            <span>{t('loanAmountLabel')}</span>
            <DCurrencyText value={amount} className="fw-bold" />
          </div>
        )}
        <div className="d-flex justify-content-between">
          <span>{t('term')}</span>
          <span className="fw-bold">{t('termMonths', { term })}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>{t('monthlyInstallments')}</span>
          <DCurrencyText value={monthlyPayment ?? 0} className="fw-bold" />
        </div>
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center gap-2">
            {t('annualInterestRate')}
            <DTooltip
              className="border-0 p-2 cursor-help"
              placement="top"
              padding={16}
              offSet={5}
              Component={(
                <DIcon
                  icon="question-circle"
                  theme="secondary"
                  size="1rem"
                />
              )}
            >
              <small>{t('tooltip.annualInterestRate')}</small>
            </DTooltip>
          </span>
          <span>
            {interestRate.annually}
            %
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center gap-2">
            {t('monthlyInterestRate')}
            <DTooltip
              className="border-0 p-2 cursor-help"
              placement="top"
              padding={16}
              offSet={5}
              Component={(
                <DIcon
                  icon="question-circle"
                  theme="secondary"
                  size="1rem"
                />
              )}
            >
              <small className="">{t('tooltip.monthlyInterestRate')}</small>
            </DTooltip>
          </span>
          <span>
            {interestRate.monthly}
            %
          </span>
        </div>
      </div>
      {totalDue && (
        <div className="bg-secondary-soft p-3 rounded-1 fw-semibold">
          {t('totalPayment', { total: format(totalDue) })}
        </div>
      )}
      <span className="small">
        <Trans
          i18nKey="annotation"
          components={{
            1: <a
              href="/"
              className="text-secondary"
              role="button"
              aria-label="support"
              aria-hidden="true"
            />,
            2: <span
              className="text-secondary text-decoration-underline"
              onClick={() => openOffcanvas('termsAndConditions', undefined)}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
              aria-label="Term and conditions"
            />,
          }}
        />
      </span>
      <div className="row py-3">
        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
          <DButton
            text={t('actions.decline')}
            className="w-100"
            variant="outline"
            theme="secondary"
            pill
            onClick={() => openModal('declineOffer', undefined)}
          />
        </div>
        <div className="col-12 col-lg-6">
          <DButton
            text={t('actions.accept')}
            className="w-100"
            pill
            loading={loading}
            onClick={applyLoan}
          />
        </div>
      </div>
    </div>
  );
}
