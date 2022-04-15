import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './app/store';

import { TippGroupOverview } from './components/TippGroupOverview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <Provider store={store}>
	    <TippGroupOverview/>
    </Provider>
	</React.StrictMode>
);
