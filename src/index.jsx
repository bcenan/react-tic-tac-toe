import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './index.css';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);
