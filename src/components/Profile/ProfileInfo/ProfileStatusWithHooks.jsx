import React, {useEffect, useState} from "react";

// Локальный state синхронизируется с глобальным один раз в самом начале формирования компоненты.
// В это время пропсы еще могут отсутствовать (зависит от того что первым придет с сервера, status или profile).
// Поэтому нужна дополнительная синхронизация локального и глобального статусов через useEffect.
const ProfileStatusWithHooks = (props) => {

    // Хук useState возвращает массив из 2 значений.
    // Первое это непосредственно наш state. Второе это функция для изменения этого state.
    // Через аргумент задается initialState.
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    // Хук useEffect запускает колбэк если изменяется что-то из массива условий.
    // В данном случае он нужен для ситуаций когда status вернулся уже после отрисовки profile.
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

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