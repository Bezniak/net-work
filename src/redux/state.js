export const store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: 169},
                {id: 2, message: 'It\'s my first post!', likeCounts: 57},
                {id: 3, message: 'Yo', likeCounts: 232},
            ],
            newPostText: 'it-incubator.com',
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
            newPostMessage: 'LaL',
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed');
    },

    addPost() {
            let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounts: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    sendMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newPostMessage,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newPostMessage = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newMessageText) {
        this._state.dialogsPage.newPostMessage = newMessageText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

window.store = store;