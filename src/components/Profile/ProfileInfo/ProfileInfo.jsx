import css from "./ProfileInfo.module.css";
import pirate_island from "./pirate_island.jpg";
import Preloader from "../../common/Preloader/Preloader";
import common_avatar from "../../../assets/images/common_avatar.jpg";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    const {profile, status, updateUserStatus} = props;

    // Пока информация о профайле не пришла с сервера - отображаем preloader.
    if (!profile) {
        return <Preloader/>;
    }

    return (
        <div>
            {/*<div>
                <img className={css.pirate_island} src={pirate_island} alt="Pirate island" />
            </div>*/}
            <div className={css.descriptionBlock}>
                <img src={profile.photos.large !== null ? profile.photos.large : common_avatar}
                     className={css.userAvatar} alt={'Avatar'}/>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;
