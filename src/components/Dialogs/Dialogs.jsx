import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {

    const {dialogs, messages} = props.dialogsState;
    const dialogItems = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageItems = messages.map(m => <MessageItem message={m.message} id={m.id}/>);

    const newMessageArea = React.createRef();

    const addMessage = () => {
        const text = newMessageArea.current.value;
        alert(text);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogItems}
            </div>
            <div className={css.messages}>
                {messageItems}
                <div>
                    <textarea ref={newMessageArea}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;