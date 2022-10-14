import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./ItemsList.scss"

const ItemsList: React.FC = () => {
  const { data, error, loading } = useTypedSelector((state) => state.items);

  const listStatus = () => {
    if (error) {
      console.error(error);
    } else if (loading) {
      console.log("Loading...");
    } else if (data.objects) {
      console.log(data.objects);
    }
  }
  listStatus();

  return (
    <ul className="items-list">
      {data.objects && data.objects.map((item: any, index: number) => {
        return (
          <li className="items-list__item" key={index}>
            <a href={item.package.links.npm}>
              <h2>{item.package.name}</h2>
            </a>
            <p>{item.package.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
