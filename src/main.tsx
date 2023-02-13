import 'virtual:uno.css';
import 'virtual:svg-icons-register';
import '@unocss/reset/normalize.css';
import '@unocss/reset/eric-meyer.css';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
