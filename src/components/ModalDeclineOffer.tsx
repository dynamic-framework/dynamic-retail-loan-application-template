import {
  DButton,
  DModal,
  DModalBody,
  DModalFooter,
  DModalHeader,
  useDPortalContext,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../store/hooks';
import { setStatus } from '../store/slice';

export default function ModalDeclineOffer() {
  const dispatch = useAppDispatch();
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  return (
    <DModal
      name="declineOffer"
      centered
      staticBackdrop
    >
      <DModalHeader
        onClose={closePortal}
      >
        <h5 className="fw-semibold">
          {t('modal.header')}
        </h5>
      </DModalHeader>
      <DModalBody className="pt-0">
        <div className="bg-secondary-soft rounded-1 p-4">
          <p className="mb-0">{t('modal.body')}</p>
        </div>
      </DModalBody>
      <DModalFooter>
        <DButton
          text={t('modal.keepOffer')}
          variant="outline"
          theme="secondary"
          onClick={closePortal}
        />
        <DButton
          text={t('modal.declineOffer')}
          onClick={() => {
            dispatch(setStatus('rejected'));
            closePortal();
          }}
        />
      </DModalFooter>
    </DModal>
  );
}
