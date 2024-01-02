const SEND_MESSAGE = 'SEND_MESSAGE';


let messageId = 5;

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Ivan'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What are you doing?'},
        {id: 4, message: 'Yo'},
    ],
}

export const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: messageId++, message: action.newMessageBody}],
            };

        default:
            return state;
    }
}


export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});