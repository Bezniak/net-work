import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Navigate} from "react-router-dom";
import DialogsForm from "../common/DialogsForm/DialogsForm";


const Dialogs = (props) => {


        let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
        let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)


        const addNewMessage = (data) => {
            props.sendMessage(data);
        }

        if (!props.isAuth) return <Navigate to='/login'/>

        return (
            <div>
                <div className={s.dialogs}>
                    <div className={s.dialogsItem}>
                        {dialogsElement}
                    </div>
                    <div className={s.messages}>
                        {messagesElement}
                    </div>
                </div>
                <div className={s.textareaBlock}>
                    <DialogsForm onSend={addNewMessage} submit={'Send'}/>
                </div>
            </div>
        )
    };

export default Dialogs;