// @ts-ignore
import React from 'react';
// @ts-ignore
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";


type PropsType = {
    id: number
    name: string
}

export const DialogItem: React.FC<PropsType> = ({id, name}) => {

    let path = '/dialogs/' + id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}