import { UPDATE_KEYWORD } from './types';

export const updateKeyword = (keyword) => ({
  type: UPDATE_KEYWORD,
  payload: keyword,
});
