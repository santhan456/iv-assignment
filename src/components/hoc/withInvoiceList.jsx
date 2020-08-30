import * as React from "react";
import {getInvoices} from "../../store/invoices/invoiceSelectors";
import {useSelector} from "react-redux";

export function withInvoiceList(Component){
    return function (componentProps){

        const hasConfig = componentProps.config;  
        const invoices = useSelector(getInvoices);

        React.useEffect(()=>{
            if(hasConfig){
                // dispatch action here
            }
        }, [hasConfig]);

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