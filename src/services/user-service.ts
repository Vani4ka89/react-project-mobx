import {IPost} from "../interfaces/post-interface";
import {urls} from "../constants/urls";
import {apiService, IRes} from "./api-service";
import {IUser} from "../interfaces/user-interface";

export const userService = {
    getUsers(): IRes<IUser[]> {
        return apiService.get<IUser[]>(urls.users.base);
    },

    getById(id: number): IRes<IUser> {
        return apiService.get<IUser>(urls.users.byId(id));
    },

    getPosts(): IRes<IPost[]> {
        return apiService.get<IPost[]>(urls.users.posts);
    }
}