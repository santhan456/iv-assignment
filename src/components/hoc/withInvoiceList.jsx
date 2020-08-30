import * as React from "react";
import {getInvoices, isInvoiceCallFailed} from "../../store/invoices/invoiceSelectors";
import {FETCH_INVOICE_ASYNC_STARTED} from "../../store/invoices/invoiceActions";
import {useSelector, useDispatch} from "react-redux";

export function withInvoiceList(Component){
    return function (componentProps){

        const hasConfig = componentProps.config;  
        
        const invoices = useSelector(getInvoices);
        const hasError = useSelector(isInvoiceCallFailed)
        
        const dispatch = useDispatch();

        React.useEffect(()=>{
            if(hasConfig && !invoices && !hasError){
                dispatch({type: FETCH_INVOICE_ASYNC_STARTED})
            }
        }, [hasConfig, invoices]);

        const propsFromHoc = {
            invoices
        }

        const props = {
            ...componentProps,
            ...propsFromHoc
        }

        return <Component {...props} />;
    }
}