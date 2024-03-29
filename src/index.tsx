import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import {
  DContextProvider,
  DModalContextProvider,
  DOffcanvasContextProvider,
} from '@dynamic-framework/ui-react';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import DeclineOfferModal from './components/DeclineOfferModal';
import TermsAndConditions from './components/TermsAndConditions';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('loanApplicationTemplate') as Element);
root.render(
  <React.StrictMode>
    <DContextProvider>
      <Provider store={store}>
        <DOffcanvasContextProvider
          portalName="offcanvasPortal"
          availableOffcanvas={{
            termsAndConditions: TermsAndConditions,
          }}
        >
          <DModalContextProvider
            portalName="modalPortal"
            availableModals={{
              declineOffer: DeclineOfferModal,
            }}
          >
            <App />
          </DModalContextProvider>
        </DOffcanvasContextProvider>
      </Provider>
    </DContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
