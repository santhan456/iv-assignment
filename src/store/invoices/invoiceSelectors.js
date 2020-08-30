export function getInvoices(state){
    return state.invoices.items;
}

export function isInvoiceCallInProgress(state){
   return state.invoices.isCallInProgress;
}

export function isInvoiceCallFailed(state){
    return !!state.invoices.error;
}