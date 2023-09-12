import { MButton, MModal, ModalProps } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../store/hooks';
import { setStatus } from '../store/slice';

export default function DeclineOfferModal({ closeModal }: ModalProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <MModal
      name="declineOffer"
      isCentered
      isStatic
      showCloseButton
      onMClose={() => closeModal()}
    >
      <div slot="header">
        <h5 className="fw-semibold">
          {t('modal.header')}
        </h5>
      </div>
      <div slot="body">
        <div className="bg-indigo-soft rounded-1 p-3 mx-3 mb-3">
          <p>{t('modal.body')}</p>
        </div>
      </div>
      <div slot="footer">
        <MButton
          class="d-grid"
          text={t('modal.keepOffer')}
          variant="outline"
          theme="secondary"
          isPill
          onClick={() => closeModal()}
        />
        <MButton
          class="d-grid"
          text={t('modal.declineOffer')}
          isPill
          onClick={() => {
            dispatch(setStatus('rejected'));
            closeModal();
          }}
        />
      </div>
    </MModal>
  );
}
