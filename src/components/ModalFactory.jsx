import * as React from "react";
import ReactDOM from 'react-dom';
import { CreditPayModal } from "./Modals/CreditPayModal";

export function ModalFactory(props){

    const {type, ...modalProps} = props;

    const modalRoot = document.getElementById("modal-container");

    if(!modalRoot){
        return null;
    }

    const renderInPortal = (childern) => ReactDOM.createPortal(childern, modalRoot);

    switch(type){
        case "CreditPay":{
            return renderInPortal(<CreditPayModal {...modalProps} />);
        }
        default:
            return null;
    }
}