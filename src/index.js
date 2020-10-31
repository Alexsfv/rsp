import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Context } from './context/Context'
import reportWebVitals from './reportWebVitals';


const app = (
    <Context>
        <App />
    </Context>
)

ReactDOM.render(app, document.getElementById('root')
);

reportWebVitals();
