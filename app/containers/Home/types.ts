import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

export interface Character {
  name: string;
  title: string;
  born: string;
}

export interface HouseItem {
  name: string;
  region: string;
  characters: Character;
  swornMembers: [string];
}

interface HomeState {
  houses: [HouseItem];
  currentCharacters?: [Character];
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = HomeState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
