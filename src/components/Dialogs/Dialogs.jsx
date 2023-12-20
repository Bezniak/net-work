import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    const dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Ivan'},
    ];

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What are you doing?'},
        {id: 4, message: 'Yo'},
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
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