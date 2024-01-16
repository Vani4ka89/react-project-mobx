import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {UserInfoPage} from "./pages/UserInfoPage/UserInfoPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {path: '', index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserInfoPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
]);

export {router};