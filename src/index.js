import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

import ticketsMiddlewares from "./redux/middlewares/tickets";
import devMiddlewares from "./redux/middlewares/dev";

import Application from "./components/Application";

import "./index.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [...ticketsMiddlewares];

if (process.env.NODE_ENV !== "production") {
    middlewares = [...middlewares, ...devMiddlewares];
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById("root")
);
