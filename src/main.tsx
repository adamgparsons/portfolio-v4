import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Layout } from './components'; // Assuming Layout will be moved to src/components

// Import global styles
import './styles/fonts.css'; // Path relative to src
import './styles/layout.css'; // Updated path relative to src

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout pageTitle="Adam Parsons - Frontend Developer"> {/* You might need to adjust how pageTitle is handled */}
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
