import React, {useEffect, useState} from 'react';
import Friend from "./Friend/Friend";

const Friends = () => {

    const [friends, setFriends] = useState([]);
    // const [userPhoto, setUserPhoto] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(friends => setFriends(friends))
            .catch(error => {
                console.log('Error occurred', error)
            })
    }, []);

    const friendList = friends.map(f => <Friend name={f.name} key={f.id} address={f.address}/>)

    return (
        <div>
            {friendList}
        </div>
    );
};

export default Friends;