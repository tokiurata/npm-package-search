import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const ItemsList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchItems } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.items);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchItems(term);
  };

  const list = () => {
    if (error) {
      return <h3>{error}</h3>;
    } else if (loading) {
      return <h3>Loading...</h3>;
    } else if (!error && !loading && data.length === 0) {
      return <h3>No results</h3>;
    } else if (!error && !loading && data.length > 0) {
      return data.map((item, index) => <div key={index}>{item}</div>);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {list()}
    </div>
  );
};

export default ItemsList;
