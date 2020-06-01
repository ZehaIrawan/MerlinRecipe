import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const { title, id } = props;
  return (
    <div>
      <h1>{title}</h1>
      <Link to={`/recipe/${id}`}>Read Full Recipe</Link>
    </div>
  );
};

export default RecipeCard;
