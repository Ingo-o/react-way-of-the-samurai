import css from "./Users.module.css";
import ava_cartman from "../../avatars/ava_cartman.jpg";
import ava_blood from "../../avatars/ava_blood.jpg";
import ava_seahorn from "../../avatars/ava_seahorn.jpg";

const Users = (props) => {
    const {users, follow, unfollow, setUsers} = props;

    // Нарушает принцип чистой функции (это временно)
    if (users.length === 0) {
        setUsers([{
            id: 1,
            avatar: ava_cartman,
            followed: false,
            fullName: 'Captain Cartman',
            status: 'I am not fat i\'m big boned!',
            location: {city: 'Mogadishu', country: 'Somalia'}
        }, {
            id: 2,
            avatar: ava_blood,
            followed: true,
            fullName: 'Peter Blood',
            status: 'Haste never leads to good.',
            location: {city: 'Bridgwater', country: 'England'}
        }, {
            id: 3,
            avatar: ava_seahorn,
            followed: false,
            fullName: 'Fleet Master Seahorn',
            status: 'Hey Baron, go long!',
            location: {city: 'Booty Bay', country: 'Stranglethorn Vale'}
        }]);
    };

    return (
        <div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} alt="Avatar" className={css.userAvatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;