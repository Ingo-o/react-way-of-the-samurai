import css from "./ProfileInfo.module.css";
import pirate_island from "./pirate_island.jpg";
import Preloader from "../../common/Preloader/Preloader";
import common_avatar from "../../../assets/images/common_avatar.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    // Пока информация о профайле не пришла с сервера - отображаем preloader.
    if (!profile) {
        return <Preloader/>;
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    // В "родительский" submit приходят все данные из формы.
    // Конкретно тут сделано не совсем правильно. Нужно стремиться к отсутствию промисов в диспатчах.
    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    // initialValues нужна для того что бы при входе в режим редактирования, поля формы не были пустыми.
    return (
        <div>
            {/*<div>
                <img className={css.pirate_island} src={pirate_island} alt="Pirate island"/>
            </div>*/}
            <div className={css.descriptionBlock}>
                <img src={profile.photos.large || common_avatar}
                     className={css.userAvatar} alt={'Avatar'}/>
                {isOwner && <div><input type={"file"} onChange={onAvatarSelected}/></div>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData activateEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div>
        <div>{isOwner && <button onClick={activateEditMode}>Edit</button>}</div>
        <div><b>Name:</b> {profile.fullName}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJob && <div><b>My skills:</b> {profile.lookingForAJobDescription}</div>}
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={css.contact}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;
