/*
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let analogOfReduxStore = {
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = analogOfReduxStore;

export default analogOfReduxStore;


//analogOfReduxStore is OOP*/
