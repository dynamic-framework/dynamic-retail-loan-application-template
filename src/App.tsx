import { useDContext } from '@dynamic-framework/ui-react';
import { useEffect } from 'react';

import ApplicationForm from './components/ApplicationForm';
import { CONTEXT_CONFIG } from './config/widgetConfig';

export default function App() {
  const { setContext } = useDContext();

  useEffect(() => {
    setContext(CONTEXT_CONFIG);
  }, [setContext]);

  return (
    <div className="container py-4">
      <div className="row justify-content-center my-4">
        <div className="col-12 col-xl-8">
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
}
