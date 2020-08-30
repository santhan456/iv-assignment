import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import { invoiceReducer } from "./invoices/invoiceReducer";
import { vendorReducer } from "./vendors/vendorReducer";
import { configReducer } from "./config/configReducer";
import configSaga from "./config/configSaga";
import vendorSaga from "./vendors/vendorSaga";
import invoiceSaga from "./invoices/invoiceSaga";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers(
    {
        invoices: invoiceReducer,
        vendors: vendorReducer,
        config: configReducer
    }
);

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga () {
    yield all([
        configSaga(),
        vendorSaga(),
        invoiceSaga()
    ]);
}

sagaMiddleware.run(rootSaga);

export default store;