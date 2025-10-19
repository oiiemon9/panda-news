import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import { router } from './Router/Router.jsx';
import AuthenticationContext from './components/AuthenticationContext/AuthenticationContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthenticationContext>
  </StrictMode>
);
