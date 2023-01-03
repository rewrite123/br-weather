import React from 'react';
import { createRoot } from 'react-dom/client';

import './style/index.scss';

import App from './App';

window.addEventListener('load', (loadEvent) => {
  const targetElement = document.getElementById('brw');
  if (targetElement != null) {
    const root = createRoot(targetElement);
    root.render(<App />);
  }
});
