import profileReducer, {addNewPost, deletePost} from "./profileReducer";
// .test.js в названии файла указывает на то что файл тестовый. Такие файлы запускаются командой "npm test".
// Лучше не делать несколько проверок внутри одного теста.

const initialState = {
    posts: [
        {id: 1, message: 'Post text', likesCount: 3},
        {id: 2, message: 'Another post text', likesCount: 12},
    ],
};

// Название теста и непосредственно тестовый callback.
test('posts amount should be incremented after adding new post', () => {

    // 1. Готовим исходные данные.
    const action = addNewPost('This is a new post text');

    // 2. Совершаем операцию.
    let newState = profileReducer(initialState, action);

    // 3. Проверяем ожидания через встроенную функцию expect.
    expect(newState.posts.length).toBe(3);
});

test('new post message should be correct', () => {
    const action = addNewPost('This is a new post text');
    let newState = profileReducer(initialState, action);
    expect(newState.posts[2].message).toBe('This is a new post text');
});

test('likes count of new post should be 0', () => {
    const action = addNewPost('This is a new post text');
    let newState = profileReducer(initialState, action);
    expect(newState.posts[2].likesCount).toBe(0);
});

test('posts amount should be decremented after deleting post', () => {
    const action = deletePost(1);
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(1);
});

test('posts amount should not be decremented after deleting post if id is incorrect', () => {
    const action = deletePost(666);
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(2);
});

