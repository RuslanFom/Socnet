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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;