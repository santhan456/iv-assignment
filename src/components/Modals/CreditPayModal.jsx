import { Modal } from 'antd';
import * as React from "react";

export function CreditPayModal(props) {
  const {isVisible, okText, cancelText, message, okAction, cancelAction, record} = props;
    return (
      <>
        <Modal
          title="Modal"
          visible={isVisible}
          onOk={() => okAction(record)}
          onCancel={cancelAction}
          okText={okText || "Ok"}
          cancelText={cancelText || "Cancel"}
        >
          <p>{message || "Are you sure?"}</p>
        </Modal>
      </>
    );
}