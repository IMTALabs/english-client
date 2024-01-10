import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from "react-redux";
import { store, persistor } from './app/store'
import SuspenseContent from './containers/suspense-content.tsx';
import { PersistGate } from 'redux-persist/integration/react';





ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store} >
      <PersistGate loading={<SuspenseContent />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Suspense>,
);
