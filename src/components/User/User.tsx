import {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IUser} from "../../interfaces/user-interface";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <NavLink to={`/users/${id}`}>getInfo</NavLink>
        </div>
    );
};

export {User};