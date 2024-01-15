// @ts-ignore
import React, {FC} from 'react';
// @ts-ignore
import s from './DialogsForm.module.css';
import {SubmitHandler, useForm} from 'react-hook-form';


type FormValues = {
    message: string
}

type OwnProps = {
    onSend: (message: string) => void,
}

const DialogsForm: FC<OwnProps> = ({onSend}) => {

    const {register, handleSubmit, reset} =
        useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        onSend(data.message);
        reset();
    };

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className={s.textarea} {...register('message', {})} />
                <input className={s.submitButton} type="submit" value='Submit'/>
            </form>
        </div>
    );
};

export default DialogsForm;