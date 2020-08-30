
export const FETCH_CONFIG_STARTED = "FETCH_CONFIG_STARTED";
export const FETCH_CONFIG_SUCCEEDED = "FETCH_CONFIG_SUCCEEDED";
export const FETCH_CONFIG_FAILED = "FETCH_CONFIG_FAILED";

export const FETCH_CONFIG_ASYNC_STARTED = "FETCH_CONFIG_ASYNC_STARTED";

export function configFetchRequested(){
    return {
        type : FETCH_CONFIG_STARTED
    }
}

export function configFetchSucceded(config){
    return {
        type: FETCH_CONFIG_SUCCEEDED,
        config
    }
}

export function configFetchFailed(error){
    return {
        type: FETCH_CONFIG_FAILED,
        error: JSON.stringify(error)
    }
}