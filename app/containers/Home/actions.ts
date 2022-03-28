import { action } from 'typesafe-actions';
// import { } from './types';

import ActionTypes from './constants';

export const actionFetchHouseDataSucessed = (data: any) =>
  action(ActionTypes.HOUSE_DATA_FETCH_SUCCEEDED, data);

export const actionFetchHouseData = () =>
  action(ActionTypes.HOUSE_DATA_FETCH_REQUESTED);

export const actionRestCharacterData = () =>
  action(ActionTypes.CHARACTER_RESET_DATA);

export const actionFetchCharacterData = (url: string) =>
  action(ActionTypes.CHARACTER_DATA_FETCH_REQUESTED, url);

export const actionFetchCharacterDataSucessed = (data: any) =>
  action(ActionTypes.CHARACTER_DATA_FETCH_SUCCEEDED, data);

export const actionViewDetailObjInModal = (data: any) =>
  action(ActionTypes.VIEW_DETAIL_OBJ, data);
