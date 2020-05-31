import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateKeyword } from '../redux/actions/search';

const SearchBar = ({ updateKeyword }) => {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
    updateKeyword(e.target.value);
  };

  return (
    <div>
      <h3>SearchBar</h3>
      <input
        value={keyword}
        onChange={(e) => onChange(e)}
        placeholder="Find your favorite recipe..."
      ></input>
      <button>Search</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = {
  updateKeyword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
