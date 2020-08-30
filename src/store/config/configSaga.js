import {put, takeLatest} from 'redux-saga/effects';
import {configFetchRequested, configFetchSucceded, configFetchFailed, FETCH_CONFIG_ASYNC_STARTED} from "./configActions";

function* fetchConfig(action) {
   try {
        yield put(configFetchRequested());

        const config = yield fetch("http://localhost:3001/config").then(response => response.json());

        yield put(configFetchSucceded(config));
        return;
   } catch (e) {
      yield put(configFetchFailed(e));
   }
}


function* configSaga() {
  yield takeLatest(FETCH_CONFIG_ASYNC_STARTED, fetchConfig);
}

export default configSaga;