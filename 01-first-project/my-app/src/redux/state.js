const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'What did you say, dude?', likesCount: 10},
                {id: 4, message: 'Who am I?', likesCount: 15}
            ],
            newPostText: 'ruslan.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ruslan'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Alex'},
                {id: 5, name: 'Tatiana'},
                {id: 6, name: 'Oleg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Whats uuupp'},
                {id: 3, message: 'Cmoon man'},
                {id: 4, message: 'Who let the dogs now'},
                {id: 5, message: 'Where is your mom'}
            ],

            newMessageBody: ''
        },
        sidebar : {}

    },
    _callSubscriber()  {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){ // { type: '(что именно нужно сделать)'} // {type: 'ADD-POST' }
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

window.store = store;

export default store;


//store is OOP