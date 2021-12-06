import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    const {dialogs, messages} = props.dialogsState;
    const {sendMessage} = props;

    const dialogItems = dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messageItems = messages.map(m => <MessageItem message={m.message} key={m.id} id={m.id}/>);

    const addNewMessage = (values) => {
        sendMessage(values.newMessageText);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogItems}
            </div>
            <div className={css.messages}>
                <div>{messageItems}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageText' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

export default Dialogs;
