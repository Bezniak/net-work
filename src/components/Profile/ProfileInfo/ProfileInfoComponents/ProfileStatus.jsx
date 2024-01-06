import React, {useEffect, useState} from 'react';
import s from "../ProfileInfo.module.css";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState(props.status);


    useEffect(() => {
        setStatusValue(props.status)
    }, [props.status]);


    const onStatusChange = (e) => {
        setStatusValue(e.target.value);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const saveStatus = () => {
        setEditMode(false)
        props.updateStatus(statusValue)
        // setStatusValue('')
    }

    return (
        <>
            {!editMode &&
                <span className={s.profileAboutMe}
                      onDoubleClick={activateEditMode}
                >
                    {props.status || "No status"}
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