import {
  DButton,
  DModal,
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
      <DModal.Header
        onClose={closePortal}
      >
        <h5 className="fw-semibold">
          {t('modal.header')}
        </h5>
      </DModal.Header>
      <DModal.Body>
        <div className="bg-secondary-soft rounded-1 p-4">
          <p className="mb-0">{t('modal.body')}</p>
        </div>
      </DModal.Body>
      <DModal.Footer actionPlacement="fill">
        <DButton
          text={t('modal.keepOffer')}
          variant="outline"
          onClick={closePortal}
        />
        <DButton
          text={t('modal.declineOffer')}
          onClick={() => {
            dispatch(setStatus('rejected'));
            closePortal();
          }}
        />
      </DModal.Footer>
    </DModal>
  );
}
