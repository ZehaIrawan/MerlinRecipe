import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const themeList = ['Spicy', 'Fish', 'Potato'];
const todayTheme = themeList[Math.floor(Math.random() * themeList.length)];

const Homepage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <SearchBar></SearchBar>
      Today theme {todayTheme}
      <br></br>
    </div>
  );
};

export default Homepage;
