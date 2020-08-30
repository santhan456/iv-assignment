
export const CONFIG_CALL_START = "CONFIG_CALL_START";
export const CONFIG_CALL_SUCCESS = "CONFIG_CALL_SUCCESS";
export const CONFIG_CALL_FAIL = "CONFIG_CALL_FAIL";

export function initConfigCall(){
    return {
        type : CONFIG_CALL_START
    }
}

export function updateConfigAfterSuccess(config){
    return {
        type: CONFIG_CALL_SUCCESS,
        config
    }
}

export function updateConfigAfterFailure(error){
    return {
        type: CONFIG_CALL_FAIL,
        error: JSON.stringify(error)
    }
}