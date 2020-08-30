export function getConfig(state){
    return state.config.data;
}

export function isInvoiceCallInProgress(state){
    return state.config.isCallInProgress;
}
