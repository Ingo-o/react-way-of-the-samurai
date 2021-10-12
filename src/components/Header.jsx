import css from "./Header.module.css";
import flag from "./../images/flag.jpg";

const Header = () => {
  return (
    <header className={css.header}>
      <img src={flag} alt="Pirate flag"></img>
    </header>
  );
};

export default Header;
