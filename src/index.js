import React from 'react';
import ReactDOM from 'react-dom';
import {compose,createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer';
import './index.css';
import App from './containers/movies/app';
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
          <App />
    </Provider>,
    document.getElementById('root')
  );


registerServiceWorker();
