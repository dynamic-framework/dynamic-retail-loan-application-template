import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles/base.scss';
import './config/liquidConfig';
import './config/i18nConfig';

import {
  LiquidContextProvider,
  ModalContextProvider,
  OffcanvasContextProvider,
} from '@dynamic-framework/ui-react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import DeclineOfferModal from './components/DeclineOfferModal';
import TermsAndConditions from './components/TermsAndConditions';

const root = ReactDOM.createRoot(document.getElementById('loanApplicationTemplate') as Element);
root.render(
  <React.StrictMode>
    <LiquidContextProvider>
      <Provider store={store}>
        <OffcanvasContextProvider
          portalName="offcanvasPortal"
          availableOffcanvas={{
            termsAndConditions: TermsAndConditions,
          }}
        >
          <ModalContextProvider
            portalName="modalPortal"
            availableModals={{
              declineOffer: DeclineOfferModal,
            }}
          >
            <App />
          </ModalContextProvider>
        </OffcanvasContextProvider>
      </Provider>
    </LiquidContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('@dynamic-framework/ui-react/dist/css/dynamic-ui.css');
}
