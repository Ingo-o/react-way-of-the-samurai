import css from "./User.module.css";
import common_avatar from "../../assets/images/common_avatar.jpg";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : common_avatar}
                             alt="Avatar" className={css.userAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        // Кнопка не активна, если процесс follow/unfollow еще не завершен.
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => unfollow(user.id)}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => follow(user.id)}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>);
}

export default User;