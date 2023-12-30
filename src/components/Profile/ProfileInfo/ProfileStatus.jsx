import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState('');


    function handleStatusChange(e) {
        setStatusValue(e.target.value);
    }

    function saveStatus() {
        props.updateStatus(statusValue)
        setStatusValue('')
        setEditMode(false)
    }

    return (
        <>
            {!editMode &&
                <span className={s.profileAboutMe} onDoubleClick={() => setEditMode(true)}>
                    {props.profileStatus}
                </span>
            }

            {editMode &&
                <div>
                    <div><input type="text" value={statusValue} onChange={handleStatusChange} onBlur={saveStatus} autoFocus={true}/></div>
                    <button onClick={saveStatus}>Save</button>
                </div>
            }

        </>

    );
};

export default ProfileStatus;