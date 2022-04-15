import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { TippGroupOverview } from './components/TippGroupOverview';


const data = [
    {id: 1, name: 'Marcel', color: 'blue'},
    {id: 2, name: 'Philipp', color: 'red'},
    {id: 3, name: 'Felix', color: 'yellow'},
    {id: 4, name: 'Peter', color: 'green'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	    <TippGroupOverview data={data}/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
