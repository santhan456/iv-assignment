

const defaultState = {
    items: [
        {
          "id": 1,
          "invoiceId": 1234,
          "vendorId": "G1",
          "quantity": 20,
          "product": "Apple",
          "amountBal": 129.92,
          "amountDue": 25.5,
          "invoiceDate": "04/01/2020"
        },
        {
          "id": 2,
          "invoiceId": 4578,
          "vendorId": "D1",
          "product": "B1",
          "quantity": 500,
          "amountBal": 1024.12,
          "amountDue": 512.5,
          "invoiceDate": "03/31/2020"
        },
        {
          "id": 3,
          "invoiceId": 9999,
          "vendorId": "W1",
          "quantity": 1000,
          "product": "Napkin",
          "amountBal": 12.25,
          "amountDue": 12.25,
          "invoiceDate": "03/31/2020"
        },
        {
          "id": 4,
          "invoiceId": 1000,
          "vendorId": "W1",
          "quantity": 25,
          "product": "Sanitizer",
          "amountBal": 25,
          "amountDue": 12.25,
          "invoiceDate": "03/31/2020"
        },
        {
          "id": 5,
          "invoiceId": 1025,
          "vendorId": "W1",
          "quantity": 1000,
          "product": "Napkin",
          "amountBal": 0,
          "amountDue": 0,
          "invoiceDate": "03/31/2020"
        },
        {
          "invoiceId": 1025,
          "vendorId": "Wasdasd1",
          "quantity": 1000,
          "product": "Napkin",
          "amountBal": 0,
          "amountDue": 0,
          "invoiceDate": "03/31/2020",
          "id": 6
        }
      ],
    isCallInProgress: false,
    error: null
};

export function invoiceReducer(state = defaultState, action){
    switch(action.type){
        default:
            return {...state};
    }
}