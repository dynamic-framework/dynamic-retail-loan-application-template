import {
  DOffcanvas,
  DButton,
  DOffcanvasHeader,
  DOffcanvasBody,
  DOffcanvasFooter,
  useDPortalContext,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

export default function TermsAndConditionsOffcanvas() {
  const { t } = useTranslation();
  const { closePortal } = useDPortalContext();

  return (
    <DOffcanvas
      name="termsAndConditions"
      openFrom="end"
      className="offcanvas-terms"
    >
      <DOffcanvasHeader
        showCloseButton
        onClose={closePortal}
      >
        <h4 className="fw-bold">{t('termsAndConditions')}</h4>
      </DOffcanvasHeader>
      <DOffcanvasBody>
        <div className="d-flex flex-column gap-6">
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis esse dolores debitis laudantium omnis non assumenda,
            eum ut in deserunt quae, eius veritatis quidem quibusdam illo aspernatur.
            Sint esse cum consequuntur necessitatibus id recusandae porro deserunt magnam.
            Quasi dicta, commodi recusandae maiores provident nulla voluptatibus aut
            esse nam corporis quod, maxime fugiat? Aperiam odit repudiandae inventore a?
            Minus voluptas consequuntur itaque facere explicabo, libero hic quas vitae
            rem magni ut pariatur officiis culpa beatae, praesentium omnis dolor eius vero!
            Perspiciatis culpa nam beatae, a exercitationem explicabo totam nostrum
            provident doloribus.
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis esse dolores debitis laudantium omnis non assumenda,
            eum ut in deserunt quae, eius veritatis quidem quibusdam illo aspernatur.
            Sint esse cum consequuntur necessitatibus id recusandae porro deserunt magnam.
            Quasi dicta, commodi recusandae maiores provident nulla voluptatibus aut
            esse nam corporis quod, maxime fugiat? Aperiam odit repudiandae inventore a?
            Minus voluptas consequuntur itaque facere explicabo, libero hic quas vitae
            rem magni ut pariatur officiis culpa beatae, praesentium omnis dolor eius vero!
            Perspiciatis culpa nam beatae, a exercitationem explicabo totam nostrum
            provident doloribus.
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis esse dolores debitis laudantium omnis non assumenda,
            eum ut in deserunt quae, eius veritatis quidem quibusdam illo aspernatur.
            Sint esse cum consequuntur necessitatibus id recusandae porro deserunt magnam.
            Quasi dicta, commodi recusandae maiores provident nulla voluptatibus aut
            esse nam corporis quod, maxime fugiat? Aperiam odit repudiandae inventore a?
            Minus voluptas consequuntur itaque facere explicabo, libero hic quas vitae
            rem magni ut pariatur officiis culpa beatae, praesentium omnis dolor eius vero!
            Perspiciatis culpa nam beatae, a exercitationem explicabo totam nostrum
            provident doloribus.
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae illo
            illum odit nihil vel recusandae maiores error n
            ostrum cupiditate consectetur!
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae illo
            illum odit nihil vel recusandae maiores error n
            ostrum cupiditate consectetur!
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis esse dolores debitis laudantium omnis non assumenda,
            eum ut in deserunt quae, eius veritatis quidem quibusdam illo aspernatur.
            Sint esse cum consequuntur necessitatibus id recusandae porro deserunt magnam.
            Quasi dicta, commodi recusandae maiores provident nulla voluptatibus aut
            esse nam corporis quod, maxime fugiat? Aperiam odit repudiandae inventore a?
            Minus voluptas consequuntur itaque facere explicabo, libero hic quas vitae
            rem magni ut pariatur officiis culpa beatae, praesentium omnis dolor eius vero!
            Perspiciatis culpa nam beatae, a exercitationem explicabo totam nostrum
            provident doloribus.
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae illo
            illum odit nihil vel recusandae maiores error n
            ostrum cupiditate consectetur!
          </p>
          <hr />
        </div>
      </DOffcanvasBody>
      <DOffcanvasFooter
        footerActionPlacement="end"
      >
        <DButton
          text={t('agree')}
          onClick={closePortal}
        />
      </DOffcanvasFooter>
    </DOffcanvas>
  );
}
