import css from "./ProfileInfo.module.css";
import pirate_island from "./pirate_island.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    const {profile} = props;

    if (!profile) {
        return <Preloader/>;
    }

    return (
        <div>
            <div>
                <img
                    className={css.pirate_island}
                    src={pirate_island}
                    alt="Pirate island"
                />
            </div>
            <div className={css.descriptionBlock}>
                <img src={profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;
