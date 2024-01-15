// @ts-ignore
import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import s from "../../ProfileInfo.module.css";


type PropsType = {
    status: string
    updateStatus: (statusValue: string) => void
}

const ProfileStatus: FC<PropsType> = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState(status);


    useEffect(() => {
        setStatusValue(status)
    }, [status]);


    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setStatusValue(e.target.value);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const saveStatus = () => {
        setEditMode(false)
        updateStatus(statusValue)
    }

    return (
        <>
            {!editMode &&
                <span className={s.profileAboutMe}
                      onDoubleClick={activateEditMode}
                >
                    {status || "No status"}
                </span>
            }

            {editMode &&
                <div>
                    <div>
                        <input type="text"
                               value={statusValue}
                               onChange={onStatusChange}
                               onBlur={saveStatus}
                               autoFocus={true}
                        />
                    </div>
                    <button onClick={saveStatus}>Save</button>
                </div>
            }

        </>

    );
};

export default ProfileStatus;