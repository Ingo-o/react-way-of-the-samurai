import css from "./Header.module.css";
import flag from "./flag.jpg";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={css.header}>
            <img src={flag} alt="Pirate flag"/>
            <div className={css.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to="/login"><button>Login</button></NavLink>}
            </div>
        </header>
    );
};

export default Header;
