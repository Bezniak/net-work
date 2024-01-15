import {FC} from 'react';
// @ts-ignore
import s from './Dialogs.module.css';
// @ts-ignore
import {DialogItem} from "./DialogItem/DialogItem.tsx";
// @ts-ignore
import {Message} from "./Message/Message.tsx";
// @ts-ignore
import DialogsForm from "../common/DialogsForm/DialogsForm.tsx";
// @ts-ignore
import {InitialStateType} from "../../redux/dialogs-reducer.ts";


type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (data: {}) => void
}


const Dialogs: FC<PropsType> = (props) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)


    const addNewMessage = (data: any) => {
        props.sendMessage(data);
    }


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
                <DialogsForm onSend={addNewMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;