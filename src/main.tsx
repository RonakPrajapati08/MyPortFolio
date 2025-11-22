import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 👇 Add this import for PWA
import { registerSW } from 'virtual:pwa-register';

// 👇 Register Service Worker (auto updates)
registerSW({
  immediate: true,
  onNeedRefresh() { },
  onOfflineReady() { },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
