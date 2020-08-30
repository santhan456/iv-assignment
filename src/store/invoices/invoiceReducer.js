
import * as invoiceActions from "./invoiceActions";

const defaultState = {
    items: null,
    isCallInProgress: false,
    error: null
};

export function invoiceReducer(state = defaultState, action){
    switch(action.type){
        case invoiceActions.FETCH_INVOICE_STARTED:{
          return {...state, isCallInProgress: true};
        };
        case invoiceActions.FETCH_INVOICE_SUCCEEDED:{
          return {...state, items: [...action.data], isCallInProgress: false};
        };
        case invoiceActions.FETCH_INVOICE_FAILED:{
          return {...state, error: action.error}
        }
        default:
            return {...state};
    }
}