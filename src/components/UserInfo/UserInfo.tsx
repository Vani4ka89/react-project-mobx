import {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useStores} from "../../stores/root-store-context";

const UserInfo: FC = () => {
    const {id: userId} = useParams();
    const {users: {getUser, user}} = useStores();

    useEffect(() => {
        getUser(Number(userId));
    }, [getUser, userId]);

    if (!user) {
        return <div>Loading!..</div>
    }
    console.log(user);

    const {id, name, username, email} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {UserInfo};