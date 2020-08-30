import {CONFIG_CALL_START, CONFIG_CALL_SUCCESS, CONFIG_CALL_FAIL} from "./configActions";

const defaultState = {
    isCallInProgress:false,
    data: {
        "tableConfig":{
          "paymentEnabled": false,
          "adjustEnabled" : true,
          "columns":[
            {
              "fieldName": "vendorId",
              "displayName" : "Vendor ID",
              "display" : false,
              "filteringEnabled" : false,
              "sortingEnabled" : true
            }
          ]
        }
      },
    error: null
};

export function configReducer(state = defaultState, action){
    switch(action.type){
        case CONFIG_CALL_START:{
            return {...state, isCallInProgress: true}
        };
        case CONFIG_CALL_SUCCESS:{
            return {...state, isCallInProgress: false, data: {...action.config}}
        };
        case CONFIG_CALL_FAIL:{
            return {...state, isCallInProgress: false, error: action.error}
        };
        default:
            return {...state};
    }
}