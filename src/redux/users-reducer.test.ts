import {actions, InitialState, usersReducer} from "./users-reducer";


let state: InitialState;

beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'Ivan', followed: false, photos: {small: null, large: null}, status: 'ReactJS'},
            {id: 1, name: 'Oleg', followed: false, photos: {small: null, large: null}, status: 'HTML'},
            {id: 2, name: 'Dimych', followed: true, photos: {small: null, large: null}, status: 'CSS'},
            {id: 3, name: 'Olga', followed: true, photos: {small: null, large: null}, status: 'Redux'},
        ],
        pageSize: 40,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],  // array of users ids
    }
})


test('follow success', () => {
    const newState = usersReducer(state, actions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});

test('unfollow success', () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3))
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
});