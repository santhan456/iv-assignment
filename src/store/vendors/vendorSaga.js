import { put, takeLatest, select} from 'redux-saga/effects';
import {vendorFetchFailed, vendorFetchRequested, vendorFetchSucceded, FETCH_VENDOR_ASYNC_STARTED} from "./vendorActions";
import {getApiConfig} from "../config/configSelectors";

function* fetchVendors(action) {
   try {
        yield put(vendorFetchRequested());

        let api = yield select(getApiConfig); 

        const vendors = yield fetch(api.vendorUrl).then(response => response.json());

        yield put(vendorFetchSucceded(vendors));
        return;
   } catch (e) {
      yield put(vendorFetchFailed(e));
   }
}


function* vendorSaga() {
  yield takeLatest(FETCH_VENDOR_ASYNC_STARTED, fetchVendors);
}

export default vendorSaga;