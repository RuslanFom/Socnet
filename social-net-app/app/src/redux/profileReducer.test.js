import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'What did you say, dude?', likesCount: 10},
        {id: 4, message: 'Who am I?', likesCount: 15}
    ]
};


test('Length of posts should be incremented', () => {
    // 1. Start test data
    let action = addPostActionCreator("IT-KAMASUTRA");
//  2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts.length).toBe(5);
});
test('message of new post should be corrected', () => {
    // 1. Start test data
    let action = addPostActionCreator("IT-KAMASUTRA");
//  2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts[4].message).toBe("IT-KAMASUTRA");
});
test('after deleting length of message should be decrement ', () => {
    // 1. Start test data
    let action = deletePost(1);
//  2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts.length).toBe(3);
});
test(`after deleting length shouldn't be changed if Id is incorrect`, () => {
    // 1. Start test data
    let action = deletePost(1000);
//  2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts.length).toBe(4);
});
