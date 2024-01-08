import React from "react";
import s from './MoreDetailsInfo.module.css';
import style from './MoreDetailsInfoForm.module.css'
import {IoClose} from "react-icons/io5";
import {MdOutlineDriveFileRenameOutline, MdOutlineNoPhotography, MdOutlineWorkOutline} from "react-icons/md";
import {BsGithub, BsPersonLinesFill} from "react-icons/bs";
import {SlSocialVkontakte} from "react-icons/sl";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {IoLogoYoutube} from "react-icons/io";
import {GoLink} from "react-icons/go";
import {useForm} from "react-hook-form";
import {GiSkills} from "react-icons/gi";

export const MoreDetailsInfoForm = (props) => {

    const {register, control, errors, isValid, handleSubmit, reset} = useForm({
        mode: "onBlur",
        defaultValues: {
            ...props.initialValue,
        },
    });


    const onSubmit = (data) => {
        console.log(data)
        props.saveProfile(data)
        props.goToEditMode();
    }

    return (
        <div className={s.moreDetailBlock}>
            <div className={s.moreDetailWrapper}>
                <div className={s.closeButton}>
                    <div className={s.closeIcon}>
                        <IoClose onClick={props.onMoreDetailClose}/>
                    </div>
                </div>
                <div className={s.photo}>
                    {props.profile.photos.large ? (
                        <img src={props.profile.photos.large} alt="photoAva"/>
                    ) : (
                        <MdOutlineNoPhotography/>
                    )}
                </div>

                <div className={s.detailsMainListWrapper}>

                    <form onSubmit={handleSubmit(onSubmit)} className={style.formData}>

                        <label className={style.formLabel}>
                            <MdOutlineDriveFileRenameOutline/>
                            Full name:
                            <input
                                type="text"
                                {...register('fullName', {})}
                            />
                        </label>


                        <label className={style.formLabel}>
                            <MdOutlineWorkOutline/>
                            Looking for a job:
                            <div className={style.radioContainer}>
                                <input
                                    type="radio"
                                    value="true"
                                    {...register('lookingForAJob', {required: true})}
                                    className={style.radioButton}
                                />
                                <span className={style.radioLabel}>Yes</span>
                                <input
                                    type="radio"
                                    value="false"
                                    {...register('lookingForAJob', {required: true})}
                                    className={style.radioButton}
                                />
                                <span className={style.radioLabel}>No</span>
                            </div>
                        </label>

                        <label className={style.formLabel}>
                            <GiSkills/>
                            My professional skills:
                            <input type="text" placeholder={'skills'} {...register('lookingForAJobDescription', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <BsPersonLinesFill/>
                            About me:
                            <input type="text"
                                   placeholder={'wright something about yourself'} {...register('aboutMe', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <BsGithub/>
                            Github:
                            <input type="text" placeholder={'link'} {...register('github', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <SlSocialVkontakte/>
                            VK:
                            <input type="text" placeholder={'link'} {...register('vk', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <FaFacebook/>
                            Facebook:
                            <input type="text" placeholder={'link'} {...register('facebook', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <FaInstagram/>
                            Instagram:
                            <input type="text" placeholder={'link'} {...register('instagram', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <FaTwitter/>
                            Twitter:
                            <input type="text" placeholder={'link'} {...register('twitter', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <CgWebsite/>
                            Website:
                            <input type="text" placeholder={'link'} {...register('website', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <IoLogoYoutube/>
                            YouTube:
                            <input type="text" placeholder={'link'} {...register('youtube', {})}/>
                        </label>

                        <label className={style.formLabel}>
                            <GoLink/>
                            MainLink:
                            <input type="text" placeholder={'link'} {...register('mainLink', {})}/>
                        </label>

                        {props.isOwner &&
                            <input
                                type="submit"
                                // disabled={!isValid}
                                value="Save"
                                data-testid="submitBtn"
                                className={style.editButton}
                            />
                        }

                    </form>
                </div>
            </div>
        </div>
    );
};