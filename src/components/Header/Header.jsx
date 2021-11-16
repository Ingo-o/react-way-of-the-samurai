import css from "./Header.module.css";
import flag from "./flag.jpg";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={css.header}>
            <img src={flag} alt="Pirate flag"/>
            <div className={css.loginBlock}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
