import { useState } from "react";
import { useActions } from "../../hooks/useActions";

import "./Search.scss";

const Search: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchItems } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchItems(term);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <input 
          className="search__input" 
          placeholder="Search packages"
          value={term} 
          onChange={e => setTerm(e.target.value)} 
        />
        <button className="search__button">Search</button>
      </form>
    </div>
  );
};

export default Search;
