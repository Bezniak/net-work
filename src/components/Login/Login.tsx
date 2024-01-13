// @ts-ignore
import s from './Login.module.css';
import {SubmitHandler, useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {Navigate} from "react-router-dom";
// @ts-ignore
import {login, logout} from "../../redux/auth-reducer.ts";
import {FC} from "react";
import {AppStateType} from "../../redux/redux-store";


type FormValues = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string,) => void
    isAuth: boolean
    captchaUrl: string
}

type MapStatePropTypes = {
    isAuth: boolean
    captchaUrl: string
}

type MapDispatchPropType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string,) => void
    logout: () => void
}

type OwnPropsType = {}

const Login: FC<PropsType> = ({login, isAuth, captchaUrl}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<FormValues>({
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        login(data.email, data.password, data.rememberMe, data.captcha);
        reset();
    };

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

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
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Enter a valid email!',
                                },
                            })}
                            placeholder={'Email'}
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


                <div>
                    {captchaUrl && <label className={s.label}>
                        Captcha:
                        <input
                            {...register('captcha', {
                                required: 'This field is required!',
                            })}
                            placeholder={'Captcha'}
                            className={s.input}
                        />
                    </label>}
                    {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
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

const mapState = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect<MapStatePropTypes, MapDispatchPropType, OwnPropsType, AppStateType>(mapState, {
    login,
    logout
})(Login);



