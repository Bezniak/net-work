import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    const state = props.store.getState().dialogPage;

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }

    return (
        <div>
            <Dialogs sendMessage={onSendMessageClick}
                     updateNewMessageBody={onNewMessageChange}
                     dialogPage={state}
            />
        </div>
    )
        ;
};

export default DialogsContainer;