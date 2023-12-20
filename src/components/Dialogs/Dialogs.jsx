import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;