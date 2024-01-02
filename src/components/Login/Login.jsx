import React from 'react';
import s from './Login.module.css';
import {useForm} from 'react-hook-form';

const Login = (props) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
    };

    return (
        <div className={s.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <h1 className={s.title}>Login</h1>
                <div className={s.formGroup}>
                    <label className={s.label}>
                        Login:
                        <input
                            {...register('email', {
                                required: 'This field is required!',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter valid email!',
                                },
                            })}
                            placeholder={'Login'}
                            className={s.input}
                        />
                    </label>
                    <div>
                        {errors?.email && <p className={s.error}>{errors?.email?.message || 'Error!'}</p>}
                    </div>
                </div>

                <div className={s.formGroup}>
                    <label className={s.label}>
                        Password:
                        <input
                            {...register('password', {
                                required: 'This field is required',
                            })}
                            type="password"
                            placeholder={'Password'}
                            className={s.input}
                        />
                    </label>
                    <div>
                        {errors?.password && <p className={s.error}>{errors?.password?.message || 'Error!'}</p>}
                    </div>
                </div>

                <div className={s.rememberMeGroup}>
                    <input type={'checkbox'} {...register('rememberMe')} id="rememberMe" className={s.checkbox}/>
                    <label htmlFor="rememberMe" className={s.rememberMeLabel}>
                        Remember me
                    </label>
                </div>

                <input
                    type="submit"
                    disabled={!isValid}
                    className={s.submitBtn}
                    value="Login"
                    data-testid="submitBtn"
                />
            </form>
        </div>
    );
};

export default Login;