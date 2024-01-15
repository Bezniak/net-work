import {InferActionsTypes} from "./redux-store";


let messageId = 5;
const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Ivan'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What are you doing?'},
        {id: 4, message: 'Yo'},
    ] as Array<MessageType>,
}


export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: messageId++, message: action.newMessageBody}],
            };

        default:
            return state;
    }
}


export const actions = {
    sendMessage: (newMessageBody: string) => ({
        type: 'SEND_MESSAGE', newMessageBody
    } as const),
}




type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
