
export const FETCH_INVOICE_STARTED = "FETCH_INVOICE_STARTED";
export const FETCH_INVOICE_SUCCEEDED = "FETCH_INVOICE_SUCCEEDED";
export const FETCH_INVOICE_FAILED = "FETCH_INVOICE_FAILED";

export const FETCH_INVOICE_ASYNC_STARTED = "FETCH_INVOICE_ASYNC_STARTED";

export function invoiceFetchRequested(){
    return {
        type : FETCH_INVOICE_STARTED
    }
}

export function invoiceFetchSucceded(data){
    return {
        type: FETCH_INVOICE_SUCCEEDED,
        data
    }
}

export function invoiceFetchFailed(error){
    return {
        type: FETCH_INVOICE_FAILED,
        error: JSON.stringify(error)
    }
}