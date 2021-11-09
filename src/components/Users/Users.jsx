import css from "./Users.module.css";
import axios from "axios";
import common_avatar from "../../assets/images/common_avatar.jpg"
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        const {setUsers} = this.props;
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items);
            });
    }

    render() {
        const {users, follow, unfollow} = this.props;
        return (
            <div>
                {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : common_avatar}
                             alt="Avatar" className={css.userAvatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => follow(u.id)}>Follow</button>}
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
}

export default Users;