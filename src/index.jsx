import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        {React.createElement(App)}
    </Provider>,
    document.getElementById('root'),
);
