import React from 'react';

const SearchBox= ({searchChange}) => {
  return (
    <div className="pa2 ">

  <input
  className="pa3 ba b--green bg-lightest-blue shadow-4 grow"
  type='search'
  placeholder ="Search Robots"
  onChange ={searchChange}/>

    </div>
  );
}

export default SearchBox;
