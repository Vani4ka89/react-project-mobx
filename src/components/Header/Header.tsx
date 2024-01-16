import {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header: FC = () => {
    return (
        <div className={css.container}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </div>
    );
};

export {Header};