// @ts-ignore
import React, {FC} from "react";
// @ts-ignore
import style from './MoreDetailsInfoForm.module.css'
import {IoClose} from "react-icons/io5";
import {MdOutlineDriveFileRenameOutline, MdOutlineNoPhotography, MdOutlineWorkOutline} from "react-icons/md";
import {BsGithub, BsPersonLinesFill} from "react-icons/bs";
import {SlSocialVkontakte} from "react-icons/sl";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {GoLink} from "react-icons/go";
import {SubmitHandler, useForm} from "react-hook-form";
import {GiSkills} from "react-icons/gi";
import {ProfileType} from "../../../../../types/types";


type FormValues = ProfileType


type PropsType = {
    initialValue: ProfileType | null
    saveProfile: (data: FormValues) => void
    goToEditMode: () => void
    onMoreDetailClose: () => void
    profile: ProfileType | null
    isOwner: boolean
    errors: Array<string>
}

export const MoreDetailsInfoForm: FC<PropsType> = ({
                                                       initialValue,
                                                       saveProfile,
                                                       goToEditMode,
                                                       onMoreDetailClose,
                                                       profile,
                                                       isOwner,
                                                   }) => {
    const {register, handleSubmit, formState: {errors}} =
        useForm<FormValues>({
            mode: "onBlur",
            defaultValues: {
                ...initialValue,
            },
        });

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        saveProfile(data);
        goToEditMode();
    };

    return (
        <div className={style.moreDetailBlock}>
            <div className={style.moreDetailWrapper}>
                <div className={style.closeButton}>
                    <div className={style.closeIcon}>
                        <IoClose onClick={onMoreDetailClose}/>
                    </div>
                </div>
                <div className={style.photo}>
                    {profile.photos.large ? (
                        <img src={profile.photos.large} alt="photoAva"/>
                    ) : (
                        <MdOutlineNoPhotography/>
                    )}
                </div>

                <div className={style.detailsMainListWrapper}>
                    <form onSubmit={handleSubmit(onSubmit)} className={style.formData}>
                        <label className={style.formLabel}>
                            <MdOutlineDriveFileRenameOutline/>
                            Full name:
                            <input
                                type="text"
                                {...register('fullName', {required: 'Full name is required.'})}
                            />
                        </label>
                        {errors.fullName && <span className={style.error}>{errors.fullName.message}</span>}

                        <label className={style.formLabel}>
                            <MdOutlineWorkOutline/>
                            Looking for a job:
                            <div className={style.radioContainer}>
                                <input
                                    type="radio"
                                    value="true"
                                    {...register('lookingForAJob', {required: 'Please select an option.'})}
                                    className={style.radioButton}
                                />
                                <span className={style.radioLabel}>Yes</span>
                                <input
                                    type="radio"
                                    value="false"
                                    {...register('lookingForAJob', {required: 'Please select an option.'})}
                                    className={style.radioButton}
                                />
                                <span className={style.radioLabel}>No</span>
                            </div>
                        </label>
                        {errors.lookingForAJob && <span className={style.error}>{errors.lookingForAJob.message}</span>}

                        <label className={style.formLabel}>
                            <GiSkills/>
                            My professional skills:
                            <input type="text" placeholder={'skills'} {...register('lookingForAJobDescription', {})}/>
                        </label>
                        {errors.lookingForAJobDescription &&
                            <span className={style.error}>{errors.lookingForAJobDescription.message}</span>}

                        <label className={style.formLabel}>
                            <BsPersonLinesFill/>
                            About me:
                            <input type="text"
                                   placeholder={'write something about yourself'} {...register('aboutMe', {})}/>
                        </label>
                        {errors.aboutMe && <span className={style.error}>{errors.aboutMe.message}</span>}

                        <label className={style.formLabel}>
                            <BsGithub/>
                            Github:
                            <input type="text" placeholder={'GitHub'} {...register('contacts.github', {})}/>
                        </label>
                        {errors['contacts.github'] &&
                            <span className={style.error}>{errors['contacts.github'].message}</span>}

                        <label className={style.formLabel}>
                            <SlSocialVkontakte/>
                            VK:
                            <input type="text" placeholder={'VK'} {...register('contacts.vk', {})}/>
                        </label>
                        {errors['contacts.vk'] && <span className={style.error}>{errors['contacts.vk'].message}</span>}

                        <label className={style.formLabel}>
                            <FaFacebook/>
                            Facebook:
                            <input type="text" placeholder={'Facebook'} {...register('contacts.facebook', {})}/>
                        </label>
                        {errors['contacts.facebook'] &&
                            <span className={style.error}>{errors['contacts.facebook'].message}</span>}

                        <label className={style.formLabel}>
                            <FaInstagram/>
                            Instagram:
                            <input type="text" placeholder={'Instagram'} {...register('contacts.instagram', {})}/>
                        </label>
                        {errors['contacts.instagram'] &&
                            <span className={style.error}>{errors['contacts.instagram'].message}</span>}


                        <label className={style.formLabel}>
                            <FaTwitter/>
                            Twitter:
                            <input type="text" placeholder={'Twitter'} {...register('contacts.twitter', {})}/>
                        </label>
                        {errors['contacts.twitter'] &&
                            <span className={style.error}>{errors['contacts.twitter'].message}</span>}

                        <label className={style.formLabel}>
                            <FaYoutube/>
                            YouTube:
                            <input type="text" placeholder={'YouTube'} {...register('contacts.youtube', {})}/>
                        </label>
                        {errors['contacts.youtube'] &&
                            <span className={style.error}>{errors['contacts.youtube'].message}</span>}

                        <label className={style.formLabel}>
                            <GoLink/>
                            Website:
                            <input type="text" placeholder={'Website'} {...register('contacts.website', {})}/>
                        </label>
                        {errors['contacts.website'] &&
                            <span className={style.error}>{errors['contacts.website'].message}</span>}


                        {isOwner &&
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