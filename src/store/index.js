import {createStore, compose, combineReducers} from "redux";
import { invoiceReducer } from "./invoices/invoiceReducer";
import { vendorReducer } from "./vendors/vendorReducer";
import { configReducer } from "./config/configReducer";

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers(
    {
        invoices: invoiceReducer,
        vendors: vendorReducer,
        config: configReducer
    }
);

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
));

export default store;