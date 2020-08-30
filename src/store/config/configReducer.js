import {CONFIG_CALL_START, CONFIG_CALL_SUCCESS, CONFIG_CALL_FAIL} from "./configActions";

const defaultState = {
    isCallInProgress:false,
    data: {
        "tableConfig":{
          "paymentEnabled": false,
          "adjustEnabled" : true,
          "columns":[
            {
              "fieldName": "product",
              "displayName" : "Product",
              "display" : true,
              "filteringEnabled" : false,
              "sortingEnabled" : true,
            },
            {
              "fieldName": "quantity",
              "displayName" : "Quantity",
              "display" : true,
              "filteringEnabled" : false,
              "sortingEnabled" : true
            },
            {
              "fieldName": "invoiceId",
              "displayName" : "Invoice ID",
              "display" : true,
              "filteringEnabled" : false,
              "sortingEnabled" : true
            },
            {
              "fieldName": "vendorName",
              "displayName" : "Vendor",
              "display" : true,
              "filteringEnabled" : false,
              "sortingEnabled" : true
            },
            {
              "fieldName": "amountBal",
              "displayName" : "Balance",
              "display" : true,
              "filteringEnabled" : false,
              "sortingEnabled" : true
            },
            {
              "fieldName": "amountDue",
              "displayName" : "Due",
              "display" : true,
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