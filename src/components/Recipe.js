import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <Link to="/">Home</Link>
      <h1>{recipe.recipeInfo.title}</h1>
      <img src={recipe.recipeInfo.image} alt="" />
      <div> {ReactHtmlParser(recipe.recipeInfo.summary)}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipeById })(Recipe);
