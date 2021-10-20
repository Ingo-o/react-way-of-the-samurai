import css from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const {name, id} = props;
    const path = "/dialogs/" + id;
    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{name}</NavLink>
        </div>
    )
};

export default DialogItem;