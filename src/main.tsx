import React from 'react'
import './styles/index.css';
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
)

// Dismiss the inline splash loader once the app has mounted (does NOT wait on images).
const loader = document.getElementById('app-loader');
if (loader) {
    const hide = () => {
        loader.classList.add('app-loader--hidden');
        setTimeout(() => loader.remove(), 600);
    };
    // brief minimum display for polish, then fade — independent of network/images
    window.requestAnimationFrame(() => setTimeout(hide, 450));
}
