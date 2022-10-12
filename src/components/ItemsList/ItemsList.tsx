import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./ItemsList.scss"

const ItemsList: React.FC = () => {
  const { data, error, loading } = useTypedSelector((state) => state.items);

  const list = () => {
    if (error) {
      console.error(error);
    } else if (loading) {
      console.log("Loading...");
    } else if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <li className="items-list__item" key={index}>{item}</li>
        )
      });
    }
  };

  return (
    <ul className="items-list">
      {list()}
    </ul>
  );
};

export default ItemsList;
