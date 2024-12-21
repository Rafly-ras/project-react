import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ScrollTopTop } from "./components/ScrollTopTop.jsx";
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollTopTop />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
