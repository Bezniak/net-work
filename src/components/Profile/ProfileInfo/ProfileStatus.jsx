import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState(!props.status);


    function onStatusChange(e) {
        setStatusValue(e.target.value);
    }

    function saveStatus() {
        props.updateStatus(statusValue)
        setEditMode(false)
        setStatusValue('')
    }

    return (
        <>
            {!editMode &&
                <span className={s.profileAboutMe}
                      onDoubleClick={() => setEditMode(true)}
                >
                    {props.status || "------"}
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