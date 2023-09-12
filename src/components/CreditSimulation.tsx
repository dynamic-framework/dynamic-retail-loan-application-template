/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import {
  DButton,
  DInputCounter,
  DInputCurrency,
  useFormatCurrency,
} from '@dynamic-framework/ui-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useSimulation from '../hooks/useSimulation';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  getOffer,
  getSimulationResult,
  getUserRequest,
} from '../store/selectors';
import {
  setRequestedAmount,
  setRequestedInstallment,
} from '../store/slice';
import AdvancedSimulation from './AdvancedSimulation';

export default function CreditSimulation() {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const { format } = useFormatCurrency();
  const { loading, simulate } = useSimulation();

  const request = useAppSelector(getUserRequest);
  const simulation = useAppSelector(getSimulationResult);
  const {
    minAmount,
    maxAmount,
    installments: {
      minimum: minInstallments,
      maximum: maxInstallments,
    },
  } = useAppSelector(getOffer);

  const disableButton = useMemo(() => (
    !request.amount || request.amount < minAmount || request.amount > maxAmount
    || request.installment < minInstallments || request.installment > maxInstallments
  ), [maxAmount, maxInstallments, minAmount, minInstallments, request.amount, request.installment]);

  const isAnyFieldTouched = useMemo(
    () => (
      request.amount !== simulation?.total
      || request.installment !== simulation?.installments.count
    ),
    [request.amount, request.installment, simulation?.installments.count, simulation?.total],
  );
  const setInstallment = (installment: number) => {
    dispatch(setRequestedInstallment(installment));
  };

  return (
    <div className="bg-white shadow-sm p-3 rounded d-flex flex-column gap-3">
      <DInputCurrency
        label={t('simulation.value')}
        innerId="creditAmount"
        hint={t('simulation.limitAmount', { min: format(minAmount), max: format(maxAmount) })}
        onEventChange={(value) => dispatch(setRequestedAmount(value))}
        value={request.amount}
        minValue={minAmount}
        maxValue={maxAmount}
      />
      <DInputCounter
        innerId="quota"
        label={t('simulation.installments')}
        minValue={minInstallments}
        maxValue={maxInstallments}
        value={request.installment}
        hint={t('simulation.installmentsRange', { min: minInstallments, max: maxInstallments })}
        onEventChange={({ detail }: CustomEvent<number>) => setInstallment(Number(detail))}
        onEventClick={({ detail }: CustomEvent<number>) => setInstallment(detail)}
      />
      {simulation && isAnyFieldTouched && (
        <div className="mx-auto">
          <DButton
            text={t('recalculate')}
            isLoading={loading}
            isPill
            onClick={simulate}
          />
        </div>
      )}
      {simulation && <AdvancedSimulation />}

      {!simulation && (
        <div className="mx-auto">
          <DButton
            theme="primary"
            text={t('simulate')}
            isPill
            isLoading={loading}
            onEventClick={simulate}
            {...(request.amount && !loading) && {
              iconEnd: 'check',
            }}
            {...disableButton && {
              state: 'disabled',
            }}
          />
        </div>
      )}
    </div>
  );
}
