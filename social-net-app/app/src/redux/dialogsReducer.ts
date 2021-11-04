import {InferActionsTypes} from "./redux-store"

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Ruslan'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Tatiana'},
        {id: 6, name: 'Oleg'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Whats uuupp'},
        {id: 3, message: 'Cmoon man'},
        {id: 4, message: 'Who let the dogs now'},
        {id: 5, message: 'Where is your mom'}
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: ActionsType):InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND-MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}


export default dialogsReducer

/*-------------------------Types-------------------------------*/

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>