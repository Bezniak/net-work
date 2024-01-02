import React from 'react';
import s from './DialogsForm.module.css';
import { useForm } from 'react-hook-form';

const DialogsForm = ({ onSend, submit }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        onSend(data.message);
        console.log(JSON.stringify(data));
        reset();
    };

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className={s.textarea} {...register('message', {})} />
                <input className={s.submitButton} type="submit" value={submit} />
            </form>
        </div>
    );
};

export default DialogsForm;