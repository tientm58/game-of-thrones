import ActionTypes from './constants';
import { ContainerState, ContainerActions, Character } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  houses: [
    {
      name: '',
      region: '',
      words: '',
      characters: {
        name: '',
        title: '',
        born: '',
      },
      swornMembers: [''],
    },
  ],
  currentCharacters: [
    {
      name: '',
      title: '',
      born: '',
    },
  ],
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.HOUSE_DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.CHARACTER_RESET_DATA:
      return {
        ...state,
        currentCharacters: [
          {
            name: '',
            title: '',
            born: '',
          },
        ],
      };
    case ActionTypes.CHARACTER_DATA_FETCH_SUCCEEDED: {
      const currentCharactersFormat = [
        ...(state.currentCharacters as [Character]),
        action.payload as Character,
      ] as [Character];
      const currentCharactersFilter = currentCharactersFormat.filter(
        e => e.name,
      ) as [Character];

      return {
        ...state,
        currentCharacters: currentCharactersFilter,
      };
    }
    case ActionTypes.VIEW_DETAIL_OBJ: {
      return {
        ...state,
        viewDetailObj: action.payload,
      };
    }
    default:
      return state;
  }
}

export default homeReducer;
