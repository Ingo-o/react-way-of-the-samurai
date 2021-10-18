import css from "./ProfileInfo.module.css";
import pirate_island from "./pirate_island.jpg";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    className={css.pirate_island}
                    src={pirate_island}
                    alt="Pirate island"
                />
            </div>
            <div className={css.descriptionBlock}>ava + description</div>
        </div>
    )
};

export default ProfileInfo;
