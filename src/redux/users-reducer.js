const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Ivan ivanovich',
            status: 'I\'m a bos!',
            location: {city: 'Minsk', country: 'Belarus'},
        },
        {
            id: 2,
            followed: true,
            fullName: 'Oleg',
            status: 'I\'m a bos too!',
            location: {city: 'NYS', country: 'USA'},
            photoUrl: 'https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
        },
        {
            id: 3,
            followed: false,
            fullName: 'Nika',
            status: 'Hey',
            location: {city: 'LA', country: 'USA'},
        },
        {
            id: 4,
            followed: true,
            fullName: 'Mike',
            status: 'LOL',
            location: {city: 'Chicago', country: 'USA'},
            photoUrl: 'https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
        },
        {
            id: 5,
            followed: false,
            fullName: 'Nika',
            status: 'Hey',
            location: {city: 'LA', country: 'USA'},
        },
        {
            id: 6,
            followed: true,
            fullName: 'Mike',
            status: 'LOL',
            location: {city: 'Chicago', country: 'USA'},
            photoUrl: 'https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
        },
        {
            id: 7,
            followed: false,
            fullName: 'Nika',
            status: 'Hey',
            location: {city: 'LA', country: 'USA'},
        },
        {
            id: 8,
            followed: true,
            fullName: 'Mike',
            status: 'LOL',
            location: {city: 'Chicago', country: 'USA'},
            photoUrl: 'https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
        },
        {
            id: 9,
            followed: false,
            fullName: 'Nika',
            status: 'Hey',
            location: {city: 'LA', country: 'USA'},
        },
        {
            id: 10,
            followed: true,
            fullName: 'Mike',
            status: 'LOL',
            location: {city: 'Chicago', country: 'USA'},
            photoUrl: 'https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
        },
        {
            id: 11,
            followed: false,
            fullName: 'Nika',
            status: 'Hey',
            location: {city: 'LA', country: 'USA'},
        },
        {
            id: 12,
            followed: true,
            fullName: 'Mike',
            status: 'LOL',
            location: {city: 'Chicago', country: 'USA'},
            photoUrl: 'https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
        },
        {
            id: 13,
            followed: false,
            fullName: 'Nika',
            status: 'Hey',
            location: {city: 'LA', country: 'USA'},
        },
        {
            id: 14,
            followed: true,
            fullName: 'Mike',
            status: 'LOL',
            location: {city: 'Chicago', country: 'USA'},
            photoUrl: 'https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais',
        },
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users})