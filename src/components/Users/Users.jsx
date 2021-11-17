import css from "./Users.module.css";
import common_avatar from "../../assets/images/common_avatar.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

const Users = (props) => {
    const {
        users, follow, unfollow, pageSize, totalUsersCount, currentPage,
        onPageChange, toggleFollowingProgress, followingInProgress,
    } = props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {   // Текущей странице задается класс selectedPage.
                    // В анонимную функцию приходит e, но мы его не используем.
                    pages.map(p => <span className={currentPage === p ? css.selectedPage : css.unselectedPage}
                                         onClick={(e) => onPageChange(p)}>{p}</span>)
                }
            </div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : common_avatar}
                                 alt="Avatar" className={css.userAvatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            // Кнопка не активна, если процесс follow/unfollow еще не завершен.
                            ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                toggleFollowingProgress(true, u.id);
                                followAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        unfollow(u.id);
                                    }
                                    toggleFollowingProgress(false, u.id);
                                });
                            }}>Unfollow</button>
                            // Кнопка не активна, если процесс follow/unfollow еще не завершен.
                            : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                toggleFollowingProgress(true, u.id);
                                followAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        follow(u.id);
                                    }
                                    toggleFollowingProgress(false, u.id);
                                });
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;