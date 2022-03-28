enum ActionTypes {
  CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME',
  HOUSE_DATA_FETCH_SUCCEEDED = 'boilerplate/Home/HOUSE_DATA_FETCH_SUCCEEDED',
  HOUSE_DATA_FETCH_FAILED = 'boilerplate/Home/HOUSE_DATA_FETCH_FAILED',
  HOUSE_DATA_FETCH_REQUESTED = 'boilerplate/Home/HOUSE_DATA_FETCH_REQUESTED',
  CHARACTER_DATA_FETCH_REQUESTED = 'boilerplate/Home/CHARACTER_DATA_FETCH_REQUESTED',
  CHARACTER_DATA_FETCH_SUCCEEDED = 'boilerplate/Home/CHARACTER_DATA_FETCH_SUCCEEDED',
  CHARACTER_DATA_FETCH_FAILED = 'boilerplate/Home/CHARACTER_DATA_FETCH_FAILED',
  CHARACTER_RESET_DATA = 'boilerplate/Home/CHARACTER_RESET_DATA',
  VIEW_DETAIL_OBJ = 'boilerplate/Home/VIEW_DETAIL_OBJ',
}

export const TYPE = {
  BOOKS: 'BOOKS',
  HOUSES: 'HOUSES',
  CHARACTERS: 'CHARACTERS',
};

export const PROPERTY_VALUE = {
  BOOKS: ['name', 'country', 'mediaType', 'isbn'],
  HOUSES: ['name', 'region', 'words'],
  CHARACTERS: ['name', 'gender', 'culture'],
};

export const PROPERTY_DISPLAY_LABEL = {
  BOOKS: ['Name', 'Country', 'Media Type', 'Is BN'],
  HOUSES: ['Name', 'Region', 'Words'],
  CHARACTERS: ['Name', 'Gender', 'Culture'],
};

export default ActionTypes;
