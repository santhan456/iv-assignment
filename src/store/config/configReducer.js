import {FETCH_CONFIG_STARTED, FETCH_CONFIG_SUCCEEDED, FETCH_CONFIG_FAILED} from "./configActions";

const defaultState = {
    isCallInProgress:false,
    data: null,
    error: null
};

export function configReducer(state = defaultState, action){
    switch(action.type){
        case FETCH_CONFIG_STARTED:{
            return {...state, isCallInProgress: true}
        };
        case FETCH_CONFIG_SUCCEEDED:{
            return {...state, isCallInProgress: false, data: {...action.config}, isCallInProgress: false};
        };
        case FETCH_CONFIG_FAILED:{
            return {...state, isCallInProgress: false, error: JSON.stringify(action.error)}
        };
        default:
            return {...state};
    }
}