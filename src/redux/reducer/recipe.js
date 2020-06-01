import { GET_RECIPE_BY_ID } from '../actions/types';

const initialState = {
  recipe: [],
  loading: true,
  error: {},
};

const recipe = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPE_BY_ID:
      return { ...state, recipeInfo: payload, loading: false };
    default:
      return state;
  }
};

export default recipe;
