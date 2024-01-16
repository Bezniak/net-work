import {PostType, ProfileType} from "../types/types";
import {actions, profileReducer} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 169},
        {id: 2, message: 'It\'s my first post!', likeCounts: 57},
        {id: 3, message: 'Yo', likeCounts: 232},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    errors: [],
}

it('length of post should be incremented', () => {
    let action = actions.addPost('it-incubator.com')


    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});

it('message of new post should be correct', () => {
    let action = actions.addPost('it-incubator.com')

    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('it-incubator.com')
});

it('after deleting length of messages should be decrement', () => {
    let action = actions.deletePost(1)

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});