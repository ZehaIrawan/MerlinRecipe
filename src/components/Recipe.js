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
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="" />
      <p>{recipe.summary}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe.recipeInfo,
});

export default connect(mapStateToProps, { getRecipeById })(Recipe);
