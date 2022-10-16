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
    <div className="items-list">
      <ul className="items-list__items">
        {data.objects?.map((item: any, index: number) => {
          return (
            <li className="items-list__item" key={index}>
              <a className="items-list__link" href={item.package.links.npm}>
                <h2 className="items-list__title">{item.package.name}</h2>
              </a>
              <p className="items-list__description">{item.package.description}</p>
              <ul className="items-list__keyword-list">
                {item.package.keywords?.map((keyword: string, index: number) => {
                  return <li className="items-list__keyword" key={index}>{keyword}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsList;
