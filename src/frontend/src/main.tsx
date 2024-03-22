import { Wrappers } from '@/application';
import '@/shared/styles/base.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wrappers />
  </StrictMode>,
);
