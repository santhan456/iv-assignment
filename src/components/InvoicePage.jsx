import * as React from "react";
import {useConfig} from "../hooks/useConfig";
import {InvoiceList} from "./InvoiceList";
import {withInvoiceList} from "./hoc/withInvoiceList";
import {withVendorsList} from "./hoc/withVendorsList";
import { Spin } from 'antd';
import { useSelector } from "react-redux";
import {isConfigCallInProgress} from "../store/config/configSelectors";

const EnhancedInvoiceList = withInvoiceList(withVendorsList(InvoiceList));

export function InvoicePage(props){
    const config = useConfig();
    const isFetchingConfig = useSelector(isConfigCallInProgress);

    if(isFetchingConfig){
        return <Spin wrapperClassName="main-spinner" />;
    }

    if(!config){
        return null;
    }

    return <EnhancedInvoiceList config={config} />;
}