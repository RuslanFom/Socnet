const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;