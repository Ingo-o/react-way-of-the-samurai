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
    const {message, id} = props;
    return <div className={css.message}>{message}</div>
};

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Captain Cartman'},
        {id: 2, name: 'Peter Blood'},
        {id: 3, name: 'Fleet Master Seahorn'},
        {id: 4, name: 'Red Beard'},
        {id: 5, name: 'Rock’n’Rolf'},
        {id: 6, name: 'Pirate burb'},
    ]

    let messages = [
        {id: 1, message: 'Who\'s there?! Oo'},
        {id: 2, message: 'Yarrrrr!'},
        {id: 3, message: 'Fifteen men on the dead man\'s chest! Yo-ho-ho, and a bottle of rum!'},
        {id: 4, message: 'Red Beard is oaf :P'},
    ]

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={css.messages}>
                {messages.map(m => <MessageItem message={m.message} id={m.id}/>)}
            </div>
        </div>
    );
};

export default Dialogs;