import {addPost, deletePost, profileReducer} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 169},
        {id: 2, message: 'It\'s my first post!', likeCounts: 57},
        {id: 3, message: 'Yo', likeCounts: 232},
    ],
    profile: null,
    status: '',
}

it('length of post should be incremented', () => {
    let action = addPost('it-incubator.com')


    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});

it('message of new post should be correct', () => {
    let action = addPost('it-incubator.com')

    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('it-incubator.com')
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});