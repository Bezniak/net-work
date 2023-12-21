import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/state";


const Dialogs = (props) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    let ref = React.createRef();

    const onMessageChange = () => {
        let text = ref.current.value;
        props.dispatch(updateNewMessageTextAC(text))
    }

    const sendMessage = () => {
        props.dispatch(sendMessageAC());
    }

    return (
        <>
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
                          ref={ref}
                          value={props.dialogsPage.newPostMessage}
                          onChange={onMessageChange}
                />
                <button onClick={sendMessage} className='btn'>Send</button>
            </div>
        </>
    )
        ;
};

export default Dialogs;