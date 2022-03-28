/**
 * Gets the repositories of the user from Github
 */

import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import ActionTypes from 'containers/Home/constants';
import { ENDPOINTS } from '../../constants/endpoints.contants';
import request from 'utils/request';
import {
  actionFetchHouseDataSucessed,
  actionFetchCharacterDataSucessed,
} from './actions';
import { formatCharacter } from './utils';

function* fetchHouseData() {
  try {
    const data = yield all({
      books: call(request, ENDPOINTS.BOOKS),
      houses: call(request, ENDPOINTS.HOUSES),
      characters: call(request, ENDPOINTS.CHARACTERS),
    });
    yield put(actionFetchHouseDataSucessed(data));
  } catch (error) {
    yield put({
      type: ActionTypes.HOUSE_DATA_FETCH_FAILED,
      message: error.message,
    });
  }
}

function* fetchCharacterData(action: any) {
  try {
    const data = yield call(request, action.payload);
    const formatData = formatCharacter(data);
    yield put(actionFetchCharacterDataSucessed(formatData));
  } catch (error) {
    yield put({
      type: ActionTypes.CHARACTER_DATA_FETCH_FAILED,
      message: error.message,
    });
  }
}

export default function* rootSagaHomePage() {
  yield takeLatest(ActionTypes.HOUSE_DATA_FETCH_REQUESTED, fetchHouseData);
  yield takeEvery(
    ActionTypes.CHARACTER_DATA_FETCH_REQUESTED,
    fetchCharacterData,
  );
}
