import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    // Хук useState возвращает массив из 2 значений.
    // Первое это непосредственно наш state (initialState - false). Второе это функция для изменения этого state.
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {editMode
                ? <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                              value={status}/></div>
                : <div onDoubleClick={activateEditMode}><span>{props.status || 'No status'}</span></div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;