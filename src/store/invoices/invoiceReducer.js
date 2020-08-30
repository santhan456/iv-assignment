
import {FETCH_INVOICE_FAILED, FETCH_INVOICE_SUCCEEDED, FETCH_INVOICE_STARTED} from "./invoiceActions";

const defaultState = {
    items: null,
    isCallInProgress: false,
    error: null
};

export function invoiceReducer(state = defaultState, action){
    switch(action.type){
        case FETCH_INVOICE_STARTED:{
          return {...state, isCallInProgress: true};
        };
        case FETCH_INVOICE_SUCCEEDED:{
          return {...state, items: [...action.data], isCallInProgress: false};
        };
        case FETCH_INVOICE_FAILED:{
          return {...state, error: action.error}
        }
        default:
            return {...state};
    }
}