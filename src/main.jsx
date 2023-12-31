import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from "react-redux";
import {store} from './app/store'
import SuspenseContent from './containers/suspense-content.tsx';






ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
);
