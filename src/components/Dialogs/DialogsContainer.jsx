import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const {dialogsState} = store.getState();
                    const {dispatch} = store;
                    const sendMessage = () => dispatch(sendMessageActionCreator());
                    const updateNewMessageText = (text) => dispatch(updateNewMessageTextActionCreator(text));

                    return <Dialogs sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}
                                    dialogsState={dialogsState}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;