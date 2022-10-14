import DecorationBar from "../DecorationBar/DecorationBar";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <DecorationBar />
      <a className="header__link" href="/">
        <h1 className="header__title">npm Package Search</h1>
      </a>
    </div>
  )
};

export default Header;
