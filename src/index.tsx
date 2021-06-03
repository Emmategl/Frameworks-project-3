import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LoginProvider } from './Pages/Login/FormContext';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
     <LoginProvider>
    <App />
    </LoginProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);

reportWebVitals();
