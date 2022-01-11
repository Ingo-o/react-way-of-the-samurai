import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import css from "./ProfileInfo.module.css";

// Само наличие кнопки в форме по умолчанию сабмитит форму.
const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button onClick={() => {}}>Save</button></div>
        {error && <div className={css.formError}>{error}</div>}
        <div><b>Name:</b> {createField("Name", "fullName", [], Input)}</div>
        <div><b>Looking for a job:</b> {createField("", "lookingForAJob",
            [], Input, {type: "checkbox"})}</div>
        <div><b>My skills:</b> {createField("My skills", "lookingForAJobDescription",
            [], Textarea)}</div>
        <div><b>About me:</b> {createField("About me", "aboutMe",
            [], Textarea)}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={css.contact}><b>{key}:</b> {createField(key, "contacts." + key,
                [], Input)}</div>
        })}</div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;