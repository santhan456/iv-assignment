import { put, takeLatest, select} from 'redux-saga/effects';
import {invoiceFetchFailed, invoiceFetchRequested, invoiceFetchSucceded, FETCH_INVOICE_ASYNC_STARTED} from "./invoiceActions";
import {getApiConfig} from "../config/configSelectors";

function* fetchInvoices(action) {
   try {
        yield put(invoiceFetchRequested());

        let api = yield select(getApiConfig); 

        const invoices = yield fetch(api.invoiceUrl).then(response => response.json());

        yield put(invoiceFetchSucceded(invoices));
        return;
   } catch (e) {
      yield put(invoiceFetchFailed(e));
   }
}


function* invoiceSaga() {
  yield takeLatest(FETCH_INVOICE_ASYNC_STARTED, fetchInvoices);
}

export default invoiceSaga;