import {
  DButton,
  DModal,
  DModalBody,
  DModalFooter,
  DModalHeader,
  ModalProps,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../store/hooks';
import { setStatus } from '../store/slice';

export default function DeclineOfferModal({ closeModal }: ModalProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <DModal
      name="declineOffer"
      centered
      staticBackdrop
    >
      <DModalHeader
        onClose={() => closeModal()}
      >
        <h5 className="fw-semibold">
          {t('modal.header')}
        </h5>
      </DModalHeader>
      <DModalBody className="pt-0">
        <div className="bg-secondary-soft rounded-1 p-3">
          <p>{t('modal.body')}</p>
        </div>
      </DModalBody>
      <DModalFooter>
        <DButton
          text={t('modal.keepOffer')}
          variant="outline"
          theme="secondary"
          pill
          onClick={() => closeModal()}
        />
        <DButton
          text={t('modal.declineOffer')}
          pill
          onClick={() => {
            dispatch(setStatus('rejected'));
            closeModal();
          }}
        />
      </DModalFooter>
    </DModal>
  );
}
