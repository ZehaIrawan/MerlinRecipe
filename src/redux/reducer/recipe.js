import { CLEAR_RECIPE, GET_RECIPE_BY_ID } from '../actions/types';

const initialState = {
  loading: false,
  error: {},
  recipeInfo: {},
};

const recipe = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPE_BY_ID:
      return { ...state, recipeInfo: payload, loading: false };
    case CLEAR_RECIPE:
      return { ...state, recipeInfo: {}, loading: true };
    default:
      return state;
  }
};

export default recipe;
