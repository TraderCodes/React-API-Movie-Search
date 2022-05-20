import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
   const { query, setQuery, error } = useGlobalContext();
   return (
      //  preventDefault after submitting
      <form
         className="search-form"
         onSubmit={(e) => {
            e.preventDefault();
         }}
      >
         <h2>Search Movies</h2>
         <input
            type="text"
            className="form-input"
            value={query}
            // onchange target value
            onChange={(e) => {
               setQuery(e.target.value);
            }}
         />
         {error.show && <div className="error">{error.msg}</div>}
      </form>
   );
};

export default SearchForm;
