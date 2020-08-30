import * as React from "react";
import {useConfig} from "../hooks/useConfig";
import {InvoiceList} from "./InvoiceList";
import {withInvoiceList} from "./hoc/withInvoiceList";
import {withVendorsList} from "./hoc/withVendorsList";

const EnhancedInvoiceList = withInvoiceList(withVendorsList(InvoiceList));

export function InvoicePage(props){
    const config = useConfig();

    if(!config){
        return null;
    }

    return <> <EnhancedInvoiceList config={config} /> </>;
}