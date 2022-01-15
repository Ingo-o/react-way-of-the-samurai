import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    const {dialogs, messages} = props.dialogsState;
    const {sendMessage} = props;

    const dialogItems = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    const messageItems = messages.map(message => <MessageItem message={message.message} key={message.id}
                                                              id={message.id}/>);

    const addNewMessage = (values) => {
        sendMessage(values.newMessageText);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>{dialogItems}</div>
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
                <Field component={Textarea} validate={[required, maxLength50]} name='newMessageText'
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

export default Dialogs;
