
export const FETCH_VENDOR_STARTED = "FETCH_VENDOR_STARTED";
export const FETCH_VENDOR_SUCCEEDED = "FETCH_VENDOR_SUCCEEDED";
export const FETCH_VENDOR_FAILED = "FETCH_VENDOR_FAILED";
export const FETCH_VENDOR_ASYNC_STARTED = "FETCH_VENDOR_ASYNC_STARTED";

export const UPDATE_VENDOR_STARTED = "UPDATE_VENDOR_STARTED";
export const UPDATE_VENDOR_FAILED = "UPDATE_VENDOR_FAILED";
export const UPDATE_VENDOR_ASYNC_STARTED = "UPDATE_VENDOR_ASYNC_STARTED";

export function vendorFetchRequested(){
    return {
        type : FETCH_VENDOR_STARTED
    }
}

export function vendorFetchSucceded(data){
    return {
        type: FETCH_VENDOR_SUCCEEDED,
        data
    }
}

export function vendorFetchFailed(error){
    return {
        type: FETCH_VENDOR_FAILED,
        error: JSON.stringify(error)
    }
}

export function vendorUpdateRequested(){
    return {
        type : UPDATE_VENDOR_STARTED
    }
}

export function vendorUpdateFailed(error){
    return {
        type: UPDATE_VENDOR_FAILED,
        error: JSON.stringify(error)
    }
}