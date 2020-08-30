import * as React from "react";
import { Button, Badge } from 'antd';

export function ActionFactory(props){
    const {type, record, text, actions} = props;

    switch(type){
        case "Pay":{
            return  record.amountDue > 0 ? 
                <Button type="primary" onClick={() => actions?.payClick(record)}>Pay</Button> : <Badge status="success" text="Dues cleared" />;
        }
        default: 
            return text;
    }
}