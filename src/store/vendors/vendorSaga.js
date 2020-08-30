import { put, takeLatest, select} from 'redux-saga/effects';
import * as vendorActions from "./vendorActions";
import {getApiConfig} from "../config/configSelectors";
import axios from "axios";

function* fetchVendors(action) {
   try {
        yield put(vendorActions.vendorFetchRequested());

        let api = yield select(getApiConfig); 

        const vendors = yield fetch(api.vendorUrl).then(response => response.json());

        yield put(vendorActions.vendorFetchSucceded(vendors));
        return;
   } catch (e) {
      yield put(vendorActions.vendorFetchFailed(e));
   }
}


function* updateVendor(action) {
   try {
         const {data} = action;
         if(data?.id){
            let api = yield select(getApiConfig);
            const url = `${api.vendorUrl}/${data.id}`;
            yield axios({
               url,
               method: "PUT",
               data
            });
            yield put({type: vendorActions.FETCH_VENDOR_ASYNC_STARTED});
         }
   } catch (e) {
      yield put(vendorActions.vendorUpdateFailed(e));
   }
}


function* vendorSaga() {
   yield takeLatest(vendorActions.FETCH_VENDOR_ASYNC_STARTED, fetchVendors);
   yield takeLatest(vendorActions.UPDATE_VENDOR_ASYNC_STARTED, updateVendor);
}

export default vendorSaga;