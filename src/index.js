import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; // make sure to import your CSS file here
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);

serviceWorkerRegistration.unregister();

reportWebVitals();
