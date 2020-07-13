import React from "react";

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.SearchBook} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default SearchArea;
