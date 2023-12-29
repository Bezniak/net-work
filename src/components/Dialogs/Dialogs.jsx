import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Navigate, NavLink} from "react-router-dom";
import {updateNewMessageBody} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;


    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    const onSendMessageClick = () => {
        props.sendMessage();
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
                <textarea className='textarea'
                          name="newMessage"
                          id="newMessage"
                          placeholder='Wright your message'
                          value={newMessageBody}
                          onChange={onNewMessageChange}/>
                <button onClick={onSendMessageClick} className='btn'>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;