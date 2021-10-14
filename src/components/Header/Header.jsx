import css from "./Header.module.css";
import flag from "./flag.jpg";

const Header = () => {
  return (
    <header className={css.header}>
      <img src={flag} alt="Pirate flag" />
    </header>
  );
};

export default Header;
