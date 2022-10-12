
import { useState } from "react";
import { useActions } from "../../hooks/useActions";

const Search: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchItems } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchItems(term);
  };

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
