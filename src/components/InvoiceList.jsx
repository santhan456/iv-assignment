import * as React from "react";
import { Table } from 'antd';
import {buildColumns, processData} from "./ComponentHelper";
import { useSelector } from "react-redux";
import { isVendorsCallInProgress } from "../store/vendors/vendorSelectors";
import { isInvoiceCallInProgress } from "../store/invoices/invoiceSelectors";
import { ModalFactory } from "./ModalFactory";
import { getTableConfig } from "../store/config/configSelectors";
import {useDispatch} from "react-redux";
import { UPDATE_INVOICE_ASYNC_STARTED } from "../store/invoices/invoiceActions";
import { UPDATE_VENDOR_ASYNC_STARTED } from "../store/vendors/vendorActions";

export function InvoiceList(props){
    const {invoices, vendors} = props;

    const dispatch = useDispatch();
    
    const isFetchingVendors = useSelector(isVendorsCallInProgress);
    const isFetchingInvoices = useSelector(isInvoiceCallInProgress);
    const isLoading = isFetchingVendors || isFetchingInvoices;

    const tableConfig = useSelector(getTableConfig);
    
    const [modalOptions, setModalOptions] = React.useState({});

    function okAction(record){
        const {id, 
            invoiceId, 
            vendorId, vendorName, 
            product, 
            quantity, 
            amountBal, 
            invoiceDate, 
            creditBal, 
            amountDue, 
            vendorUId} = record;

        const updatedDue = creditBal >= amountDue ? 0 : amountDue - creditBal;
        const updateCreditBal = creditBal >= amountDue ? creditBal - amountDue : 0;
        dispatch({
            type: UPDATE_INVOICE_ASYNC_STARTED, 
            data: {id, invoiceId, vendorId, product, quantity, amountBal, invoiceDate, amountDue: updatedDue}
        });
        dispatch({
            type: UPDATE_VENDOR_ASYNC_STARTED,
            data: { vendorName, vendorId, id: vendorUId, creditBal: updateCreditBal}
        });
        setModalOptions({
           ...modalOptions,
           isVisible: false 
        })
    }

    const cancelAction = () => {
        setModalOptions({
            isVisible: false  
        });
    }

    const payClick = (record) => {
        if(record.creditBal > 0){
            setModalOptions({
                type:"CreditPay",
                isVisible: true,
                okAction: okAction,
                cancelAction,
                message: "Do you want to apply available credit for bill payment?",
                record
            });
        }
    };

    const bingConfigWithActions = () => {
        const newColumns =  tableConfig?.columns.map((column) => {
            switch(column.type){
                case "Pay":{
                    return {
                        ...column, actions: { payClick }
                    }
                }
                default:{
                    return {...column};
                }
            }
        });
        return {...tableConfig, columns:newColumns};       
    }

    const modifiedConfig = bingConfigWithActions();
    const columns = buildColumns(modifiedConfig);
    const data = processData(vendors, invoices);
    
    return <>
        <Table columns={columns} dataSource={data} pagination={false} loading={isLoading}/>
        <ModalFactory  {...modalOptions} />
    </>;
}

