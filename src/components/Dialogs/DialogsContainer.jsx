import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../storeContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            const state = store.getState().dialogPage;
            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }
            const onSendMessageClick = () => {
                store.dispatch(sendMessageAC());
            }

            return <Dialogs sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}
                            dialogPage={state}
            />
        }}

    </StoreContext.Consumer>
};

export default DialogsContainer;