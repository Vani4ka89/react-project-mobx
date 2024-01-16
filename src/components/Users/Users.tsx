import {FC, useEffect} from 'react';
import {observer} from "mobx-react-lite";

import {useStores} from "../../stores/root-store-context";
import {User} from "../User/User";

const Users: FC = observer(() => {
    const {users: {users, getAllUsers}} = useStores();

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    return (
        <div>
            {users && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
});

export {Users};