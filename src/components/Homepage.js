import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateKeyword } from '../redux/actions/search';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const themeList = ['Garlic Sauce', 'Garlic Broccoli'];
const todayTheme = themeList[Math.floor(Math.random() * themeList.length)];

const Homepage = ({ updateKeyword }) => {
  useEffect(() => {
    updateKeyword(todayTheme);
  }, [updateKeyword]);
  return (
    <div>
      <Link to="/">Home</Link>
      <SearchBar></SearchBar>
      Today theme {todayTheme}
      <br></br>
      <SearchResult></SearchResult>
    </div>
  );
};

const mapDispatchToProps = {
  updateKeyword,
};

export default connect(null, mapDispatchToProps)(Homepage);
