import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className="pa2 br3 ba b--green bg-lightest-blue"
        placeholder="find your cat"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;