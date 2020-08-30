import { put, takeLatest, select} from 'redux-saga/effects';
import * as invoiceActions from "./invoiceActions";
import {getApiConfig} from "../config/configSelectors";
import axios from "axios";

function* fetchInvoices() {
   try {
        yield put(invoiceActions.invoiceFetchRequested());

        let api = yield select(getApiConfig); 

        const invoices = yield fetch(api.invoiceUrl).then(response => response.json());

        yield put(invoiceActions.invoiceFetchSucceded(invoices));
        return;
   } catch (e) {
      yield put(invoiceActions.invoiceFetchFailed(e));
   }
}


function* updateInvoice(action) {
   try {
         const {data} = action;
         if(data?.id){
            let api = yield select(getApiConfig);
            const url = `${api.invoiceUrl}/${data.id}`;
            yield axios({
               url,
               method: "PUT",
               data
            });
            yield put({type: invoiceActions.FETCH_INVOICE_ASYNC_STARTED});
         }
   } catch (e) {
      yield put(invoiceActions.invoiceUpdateFailed(e));
   }
}

function* invoiceSaga() {
   yield takeLatest(invoiceActions.FETCH_INVOICE_ASYNC_STARTED, fetchInvoices);
   yield takeLatest(invoiceActions.UPDATE_INVOICE_ASYNC_STARTED, updateInvoice);
}

export default invoiceSaga;