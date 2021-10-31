import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {
    const {dialogs, messages, newMessageText} = props.dialogsState;
    const {sendMessage, updateNewMessageText} = props;

    const dialogItems = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageItems = messages.map(m => <MessageItem message={m.message} id={m.id}/>);

    const sendMessageButtonClick = () => sendMessage();

    const textAreaChange = (e) => {
        const text = e.target.value;
        updateNewMessageText(text);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogItems}
            </div>
            <div className={css.messages}>
                <div>{messageItems}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' onChange={textAreaChange} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={sendMessageButtonClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;