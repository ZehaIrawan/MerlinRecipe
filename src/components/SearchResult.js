import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const SearchResult = ({ keyword }) => {
  const [recipes, setRecipes] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  let url = `${API_URL}=${keyword}&apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      setRecipes(res.data.results);
      setIsLoading(false);
    }
    fetchData();
  }, [keyword]);

  if (IsLoading) {
    return <div className="loading">Loading ...</div>;
  }
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} title={recipe.title}></RecipeCard>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  keyword: state.search.keyword,
});

export default connect(mapStateToProps)(SearchResult);
