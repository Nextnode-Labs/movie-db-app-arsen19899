import React from 'react';
import {render} from 'react-dom';
import {compose,createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer';
import './index.css';
import App from './containers/movies/app';
import {Provider, useSelector} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app,document.getElementById('root'));

registerServiceWorker();
