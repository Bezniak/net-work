// @ts-ignore
import React, {FC, useState} from "react";
// @ts-ignore
import style from "./PhotoToolsHover.module.css";
import {HiOutlinePhotograph} from "react-icons/hi";
import {MdOutlineEdit} from "react-icons/md";
import {FaRegCircleUser} from "react-icons/fa6";
import {DiPhotoshop} from "react-icons/di";
import {RiDeleteBin5Line} from "react-icons/ri";
import {IoClose} from "react-icons/io5";


type PropsTypeForPhotoToolsHover = {
    savePhoto: (file: File) => void
}
export const PhotoToolsHover: FC<PropsTypeForPhotoToolsHover> = ({savePhoto}) => {
    const [showUpdatePhoto, setShowUpdatePhoto] = useState(false);

    const handleUpdatePhotoClick = () => {
        setShowUpdatePhoto(true);
    };

    const handleCloseUpdatePhoto = () => {
        setShowUpdatePhoto(false);
    };

    const handleClosePhotoToolsHover = () => {
        setShowUpdatePhoto(false);
    };

    return (
        <div>
            {showUpdatePhoto
                ? (
                    <div className={style.overlay} onClick={handleClosePhotoToolsHover}>
                        <div className={style.updatePhotoContainer}>
                            <UpdatePhoto savePhoto={savePhoto} onClose={handleCloseUpdatePhoto}/>
                        </div>
                    </div>
                )
                : (
                    <ul className={style.listItemGroup}>
                        <li className={style.listItem}>
                            <HiOutlinePhotograph/>
                            Open photo
                        </li>
                        <li className={style.listItem} onClick={handleUpdatePhotoClick}>
                            <MdOutlineEdit/>
                            Update photo
                        </li>
                        <li className={style.listItem}>
                            <FaRegCircleUser/>
                            Change thumbnail
                        </li>
                        <li className={style.listItem}>
                            <DiPhotoshop/>
                            Add effects
                        </li>
                        <li className={style.listItem}>
                            <RiDeleteBin5Line style={{color: "red"}}/>
                            Remove photo
                        </li>
                    </ul>
                )}
        </div>
    );
};



type PropsTypeForUpdatePhoto = {
    savePhoto: (file: File) => void
    onClose: () => void
}
const UpdatePhoto: FC<PropsTypeForUpdatePhoto> = ({savePhoto, onClose}) => {

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={style.updatePhotoBlock}>
            <div className={style.close} onClick={onClose}>
                <IoClose/>
            </div>
            <div>Uploading a new photo</div>
            <hr/>
            <div>
                It will be easier for your friends to recognize you if you upload a real photo of yourself. You can
                upload
                the image in JPG, GIF, or PNG format.
            </div>
            <input type="file" onChange={onMainPhotoSelected}/>
            <hr/>
            <div>If you're having trouble loading, try selecting a smaller photo.</div>
        </div>
    );
};


