import * as React from "react";
import { Tag, Space } from 'antd';

export function processData(vendors, invoices){
    const mergedData =  invoices.map(invoice => {
        const vendor = vendors.filter(vendor => vendor.vendorId === invoice.vendorId);
        if(!vendor || (vendor && !vendor[0])){
            return null;
        }
        const {vendorName, creditBal} = vendor[0];
        return {
            ...invoice, vendorName, creditBal
        }
    });
    return compact(mergedData);
}

function compact(arr){
    const invalidValues = [null, undefined];
    return arr.filter(item => invalidValues.indexOf(item) === -1)
}

export function buildColumns(config){
    return config.tableConfig.columns.map((column) => {
      return {
        title: column.displayName,
        dataIndex: column.fieldName,
      }
    });
}