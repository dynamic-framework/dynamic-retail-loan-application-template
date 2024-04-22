import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { DContextProvider } from '@dynamic-framework/ui-react';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import ModalDeclineOffer from './components/ModalDeclineOffer';
import OffcanvasTermsAndConditions from './components/OffcanvasTermsAndConditions';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('loanApplicationTemplate') as Element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DContextProvider
        portalName="portal"
        availablePortals={{
          offcanvasTermsAndConditions: OffcanvasTermsAndConditions,
          modalDeclineOffer: ModalDeclineOffer,
        }}
      >
        <App />
      </DContextProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
