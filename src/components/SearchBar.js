import React, { useState } from 'react';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => setKeyword(e.target.value);

  return (
    <div>
      <h3>SearchBar</h3>
      <input
        value={keyword}
        onChange={(e) => onChange(e)}
        placeholder="Find your favorite recipe..."
      ></input>
    </div>
  );
};

export default SearchBar;
