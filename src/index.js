import React from 'react';
import App from './components/App/App';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import {createStore} from "redux";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
