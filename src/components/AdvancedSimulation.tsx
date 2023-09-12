/* eslint-disable jsx-a11y/anchor-has-content */
import {
  MButton,
  MCurrencyText,
  MIcon,
  useOffcanvasContext,
  useFormatCurrency,
  useModalContext,
  MTooltip,
} from '@dynamic-framework/ui-react';
import { Trans, useTranslation } from 'react-i18next';

import { useAppSelector } from '../store/hooks';
import { getSimulationResult } from '../store/selectors';
import useApplyLoan from '../hooks/useApplyLoan';

export default function AdvancedSimulation() {
  const { loading, applyLoan } = useApplyLoan();
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
  const { openModal } = useModalContext();
  const { openOffcanvas } = useOffcanvasContext();
  const { t } = useTranslation();
  const { format } = useFormatCurrency();

  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="fw-bold fs-6">{t('conditions')}</h2>
      <div className="bg-gray-200 text-center p-3 rounded-1 d-flex gap-3 flex-column">
        <p>{t('yourPayment')}</p>
        <MCurrencyText value={monthlyPayment} className="display-5 fw-bold" />
      </div>
      <div className="bg-indigo-soft p-3 rounded-1 d-flex flex-column gap-2">
        {amount && (
          <div className="d-flex justify-content-between">
            <span>{t('loanAmountLabel')}</span>
            <MCurrencyText value={amount} className="fw-bold" />
          </div>
        )}
        <div className="d-flex justify-content-between">
          <span>{t('term')}</span>
          <span className="fw-bold">{t('termMonths', { term })}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>{t('monthlyInstallments')}</span>
          <MCurrencyText value={monthlyPayment ?? 0} className="fw-bold" />
        </div>
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center gap-2">
            {t('annualInterestRate')}
            <MTooltip
              className="bg-transparent border-0 p-0 cursor-help"
              placement="top"
              padding={16}
              offSet={5}
              Component={(
                <MIcon
                  icon="question-circle"
                  theme="secondary"
                  size="1rem"
                />
              )}
            >
              <small>{t('tooltip.annualInterestRate')}</small>
            </MTooltip>
          </span>
          <span>
            {interestRate.annually}
            %
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center gap-2">
            {t('monthlyInterestRate')}
            <MTooltip
              className="bg-transparent border-0 p-0 cursor-help"
              placement="top"
              padding={16}
              offSet={5}
              Component={(
                <MIcon
                  icon="question-circle"
                  theme="secondary"
                  size="1rem"
                />
              )}
            >
              <small className="">{t('tooltip.monthlyInterestRate')}</small>
            </MTooltip>
          </span>
          <span>
            {interestRate.monthly}
            %
          </span>
        </div>
      </div>
      {totalDue && (
        <div className="bg-indigo-soft p-3 rounded-1 fw-semibold">
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
              onClick={() => openOffcanvas('termsAndConditions')}
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
          <MButton
            className="d-grid"
            text={t('actions.decline')}
            variant="outline"
            theme="secondary"
            isPill
            onMClick={() => openModal('declineOffer')}
          />
        </div>
        <div className="col-12 col-lg-6">
          <MButton
            className="d-grid"
            text={t('actions.accept')}
            isPill
            isLoading={loading}
            onMClick={applyLoan}
          />
        </div>
      </div>
    </div>
  );
}
