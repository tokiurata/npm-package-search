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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
};

export default ItemsList;
