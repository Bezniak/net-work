const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: 169},
                {id: 2, message: 'It\'s my first post!', likeCounts: 57},
                {id: 3, message: 'Yo', likeCounts: 232},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newPostMessage: '',
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likeCounts: 0,
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            }
            case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            }
            case SEND_MESSAGE: {
                let newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newPostMessage,
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newPostMessage = '';
                this._callSubscriber(this._state);
                break;
            }
            case UPDATE_NEW_MESSAGE_TEXT: {
                this._state.dialogsPage.newPostMessage = action.newMessageText;
                this._callSubscriber(this._state);
                break;
            }

            default:
                return this._state
        }
    }

}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateNewMessageTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});
export const sendMessageAC = () => ({type: SEND_MESSAGE});

window.store = store;