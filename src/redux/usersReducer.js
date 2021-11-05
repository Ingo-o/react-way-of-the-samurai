// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

const FOLLOW = 'FOLLOW';
export const followActionCreator = (userId) => ({type: FOLLOW, userId});

const UNFOLLOW = 'UNFOLLOW';
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

const SET_USERS = 'SET_USERS';
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

const initialUsersState = {
    users: [
        {
            id: 1,
            avatarUrl: 'https://4.downloader.disk.yandex.ru/preview/f67e4779257e6e9a85b0ac498ebb3abaa4b4899eb0552f969267270e9fa10dfa/inf/jfmNBR5xU6SLXmjpsEv4Po7ZAlDx9S8xW3Fs6DcIvJEaEkBIF4MO6QyP8y3W9qDagLJb1kLozkXDslrUdfNY3g%3D%3D?uid=12379035&filename=ava_cartman.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=12379035&tknv=v2&size=1279x599',
            followed: false,
            fullName: 'Captain Cartman',
            status: 'I am not fat i\'m big boned!',
            location: {city: 'Mogadishu', country: 'Somalia'}
        }, {
            id: 2,
            avatarUrl: 'https://3.downloader.disk.yandex.ru/preview/98c7d94d1e5301fbcc3c89e7ca00a306ef929a04c502da800357c59addc3a0b1/inf/aSffa2i_NKZB16PWk_U9zdTlpQYNkMfj9eJ_q0Ur9qWBYyuRZb9RkYKdCoY-86eVGRJv48h7k7uyyPJeR-3EqQ%3D%3D?uid=12379035&filename=ava_blood.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=12379035&tknv=v2&size=1279x599',
            followed: true,
            fullName: 'Peter Blood',
            status: 'Haste never leads to good.',
            location: {city: 'Bridgwater', country: 'England'}
        }, {
            id: 3,
            avatarUrl: 'https://2.downloader.disk.yandex.ru/preview/7bb3881ab2861e2d51b283f04a57f24629a9bb8ff508e22ced7c8003e07fe6c5/inf/KEGLze4C6uj6eTTsimXkbvmT_iuYDagdY1CFdFqebiyQnK5Q1GSJkQNdm1xaEURvp1lSFYNqcvjg4uB53jNZ2Q%3D%3D?uid=12379035&filename=ava_seahorn.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=12379035&tknv=v2&size=1279x599',
            followed: false,
            fullName: 'Fleet Master Seahorn',
            status: 'Hey Baron, go long!',
            location: {city: 'Booty Bay', country: 'Stranglethorn Vale'}
        },
    ]
};

const usersReducer = (usersState = initialUsersState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersState,
                users: usersState.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...usersState,
                users: usersState.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {...usersState, users: [...usersState.users, ...action.users]};
        default:
            return usersState;
    }
};

export default usersReducer;