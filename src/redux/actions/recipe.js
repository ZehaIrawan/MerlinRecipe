import axios from 'axios';
import { CLEAR_RECIPE, GET_RECIPE_BY_ID } from './types';

// Get Recipe By Id
export const getRecipeById = (RecipeId) => async (dispatch) => {
  dispatch({ type: CLEAR_RECIPE });
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${RecipeId}/information?&apiKey=9a2b8c98fdf943e984497cba74fc1de8`,
    );
    dispatch({
      type: GET_RECIPE_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
