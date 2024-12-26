import { DContextProvider } from '@dynamic-framework/ui-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import ModalDeclineOffer from './components/ModalDeclineOffer';
import OffcanvasTermsAndConditions from './components/OffcanvasTermsAndConditions';
import store from './store/store';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

const root = createRoot(document.getElementById('loanApplicationTemplate') as Element);
root.render(
  <StrictMode>
    <Provider store={store}>
      <DContextProvider
        availablePortals={{
          offcanvasTermsAndConditions: OffcanvasTermsAndConditions,
          modalDeclineOffer: ModalDeclineOffer,
        }}
      >
        <App />
      </DContextProvider>
    </Provider>
  </StrictMode>,
);
