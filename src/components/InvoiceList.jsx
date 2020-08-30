import * as React from "react";
import { Table, Tag, Space } from 'antd';
import {buildColumns, processData} from "./ComponentHelper";

export function InvoiceList(props){
    const {invoices, vendors, config} = props;

    const columns = buildColumns(config);
    const data = processData(vendors, invoices);
    console.log({columns, data});

    return <Table columns={columns} dataSource={data} pagination={false}/>;
}

