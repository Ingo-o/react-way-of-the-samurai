import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    const { dialogs, messages } = props.dialogsState;
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