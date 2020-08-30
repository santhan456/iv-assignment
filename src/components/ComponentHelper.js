import * as React from "react";
import {ActionFactory} from "./ActionFactory";

export function processData(vendors, invoices){
    if(!vendors || !invoices){
        return null;
    }
    
    const mergedData =  invoices.map(invoice => {
        const vendor = vendors.filter(vendor => vendor.vendorId === invoice.vendorId);
        if(!vendor || (vendor && !vendor[0])){
            return null;
        }
        const {vendorName, creditBal, id, vendorId} = vendor[0];
        return {
            ...invoice, vendorName, creditBal, vendorUId: id, vendorId
        }
    });
    return compact(mergedData);
}

function compact(arr){
    const invalidValues = [null, undefined];
    return arr.filter(item => invalidValues.indexOf(item) === -1);
}

export function buildColumns(tableConfig){
    return tableConfig?.columns.map((column) => {
      return {
        title: column.displayName,
        dataIndex: column.fieldName, 
        render: (text, record) => (
            <ActionFactory type={column.type} text={text} record={record} actions={column.actions} />
          ),
      }
    });
}