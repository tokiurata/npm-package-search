import { useTypedSelector } from "../../hooks/useTypedSelector";

const ItemsList: React.FC = () => {
  const { data, error, loading } = useTypedSelector((state) => state.items);

  const list = () => {
    if (error) {
      console.error(error);
    } else if (loading) {
      return <h3>Loading...</h3>;
    } else if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      });
    }
  };

  return (
    <div className="items-list">
      {list()}
    </div>
  );
};

export default ItemsList;
