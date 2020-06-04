import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeById } from '../redux/actions/recipe';

const Recipe = ({ match, getRecipeById, recipe }) => {
  useEffect(() => {
    getRecipeById(match.params.id);
  }, [getRecipeById, match.params.id]);

  if (recipe.loading) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <h1>{recipe.recipeInfo.title}</h1>
      <img src={recipe.recipeInfo.image} alt="" />
      <p>Preparation : {recipe.recipeInfo.preparationMinutes} minutes</p>
      <p>{recipe.recipeInfo.summary}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipeById })(Recipe);
