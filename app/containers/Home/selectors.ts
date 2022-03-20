/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHome = (state: ApplicationRootState) => state.home || initialState;

const makeSelectHouses = () =>
  createSelector(selectHome, substate => substate.houses);

const makeSelectCurrentCharacters = () =>
  createSelector(selectHome, substate => substate.currentCharacters);

export { selectHome, makeSelectHouses, makeSelectCurrentCharacters };
