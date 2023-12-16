import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const theme = createTheme({
  typography: {
    fontFamily: 'Kalam',
  },
  palette: {
    stickynote: {
      green: '#cdfc93',
      pink: '#ff7ecd',
      cyan: '#71d7ff',
      purple: '#ce81ff',
      yellow: '#fff68b',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
