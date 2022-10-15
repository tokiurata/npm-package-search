import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <a className="header__link" href="/">
        <h1 className="header__title">npm Package Search</h1>
      </a>
      <div className="header__bottom" />
    </div>
  )
};

export default Header;
