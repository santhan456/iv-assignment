import * as React from "react";
import { Table } from 'antd';
import {buildColumns, processData} from "./ComponentHelper";
import { useSelector } from "react-redux";
import { isVendorsCallInProgress } from "../store/vendors/vendorSelectors";
import { isInvoiceCallInProgress } from "../store/invoices/invoiceSelectors";

export function InvoiceList(props){
    const {invoices, vendors, config} = props;

    const isFetchingVendors = useSelector(isVendorsCallInProgress);
    const isFetchingInvoices = useSelector(isInvoiceCallInProgress);

    const isLoading = isFetchingVendors || isFetchingInvoices;

    const columns = buildColumns(config);
    const data = processData(vendors, invoices);
    console.log({columns, data});

    return <Table columns={columns} dataSource={data} pagination={false} loading={isLoading}/>;
}

