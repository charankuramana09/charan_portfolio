import React from 'react'
import './styles/index.css';
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';


import App from './App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
)
