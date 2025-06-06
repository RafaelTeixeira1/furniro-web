import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@splidejs/splide/dist/css/splide.min.css';
import './styles/index.css';
import App from './App.tsx';

import { BrowserRouter } from 'react-router-dom'
import BrowseTheRange from './components/common/BrowseTheRange.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <BrowseTheRange />
    </BrowserRouter>
  </StrictMode>,
)
