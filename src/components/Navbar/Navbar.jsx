import css from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    // NavLink меняет адрес в адресной строке не перезагружая страницу.
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.active}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.active}>Dialogs</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/users" activeClassName={css.active}>Users</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" activeClassName={css.active}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" activeClassName={css.active}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/settings" activeClassName={css.active}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
