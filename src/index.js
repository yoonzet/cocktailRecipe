import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Reaact.StrictMode>
    <RecoilRoot>
        <AppProvider>
          <App />
        </AppProvider>
    </RecoilRoot>
    // </Reaact.StrictMode>
  );
