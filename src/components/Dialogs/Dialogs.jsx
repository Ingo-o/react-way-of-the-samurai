import css from "./Dialogs.module.css";
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

const MessageItem = (props) => {
    const {text} = props;
    return <div className={css.message}>{text}</div>
};

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <DialogItem name="Captain Cartman" id="1"/>
                <DialogItem name="Peter Blood" id="2"/>
                <DialogItem name="Fleet Master Seahorn" id="3"/>
                <DialogItem name="Red Beard" id="4"/>
                <DialogItem name="Rock’n’Rolf" id="5"/>
                <DialogItem name="Pirate burb" id="6"/>
            </div>
            <div className={css.messages}>
                <MessageItem text="Who's there?! Oo"/>
                <MessageItem text="Yarrrrr!"/>
                <MessageItem text="Fifteen men on the dead man's chest! Yo-ho-ho, and a bottle of rum!"/>
            </div>
        </div>
    );
};

export default Dialogs;