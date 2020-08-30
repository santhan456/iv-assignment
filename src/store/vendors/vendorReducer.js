
const defaultState = {
    items: [
        {
          "id":1,
          "vendorId": "D1",
          "vendorName": "Delmonte",
          "creditBal": 600
        },
        {
          "id":2,
          "vendorId": "T1",
          "vednorName": "Target"
        },
        {
          "id":3,
          "vendorId": "W1",
          "vendorName": "Walmart",
          "creditBal": 12.25
        },
        {
          "id":4,
          "vendorId": "G1",
          "vendorName": "Global Fruits",
          "creditBal": 0
        }
      ],
    isCallInProgress: false,
    error: null
};

export function vendorReducer(state = defaultState, action){
    switch(action.type){
        default:
            return {...state};
    }
}