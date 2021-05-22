import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MediaProvider } from './context/MediaContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MediaProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MediaProvider>
    </AuthProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
