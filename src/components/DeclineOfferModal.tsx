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
      isCentered
      isStatic
    >
      <DModalHeader
        onClose={() => closeModal()}
      >
        <h5 className="fw-semibold">
          {t('modal.header')}
        </h5>
      </DModalHeader>
      <DModalBody>
        <div className="bg-indigo-soft rounded-1 p-3 mx-3 mb-3">
          <p>{t('modal.body')}</p>
        </div>
      </DModalBody>
      <DModalFooter>
        <DButton
          text={t('modal.keepOffer')}
          variant="outline"
          theme="secondary"
          isPill
          onClick={() => closeModal()}
        />
        <DButton
          text={t('modal.declineOffer')}
          isPill
          onClick={() => {
            dispatch(setStatus('rejected'));
            closeModal();
          }}
        />
      </DModalFooter>
    </DModal>
  );
}
