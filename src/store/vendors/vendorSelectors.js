export function getVendors(state){
    return state.vendors.items;
}

export function isVendorsCallInProgress(state){
    return state.invoices.isCallInProgress;
}