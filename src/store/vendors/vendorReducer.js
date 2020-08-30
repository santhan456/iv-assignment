
import {FETCH_VENDOR_FAILED, FETCH_VENDOR_SUCCEEDED, FETCH_VENDOR_STARTED} from "./vendorActions";

const defaultState = {
    items: null,
    isCallInProgress: false,
    error: null
};

export function vendorReducer(state = defaultState, action){
    switch(action.type){
        case FETCH_VENDOR_STARTED:{
          return {...state, isCallInProgress: true};
        };
        case FETCH_VENDOR_SUCCEEDED:{
          return {...state, items: [...action.data],  isCallInProgress: false}
        };
        case FETCH_VENDOR_FAILED:{
          return {...state, error: action.error}
        }
        default:
            return {...state};
    }
}