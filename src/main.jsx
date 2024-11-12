import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
//import { store } from './middleware/store.js';
import './index.scss'
import App from './App.jsx'
import './scss/styles.scss'

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </StrictMode>
);
