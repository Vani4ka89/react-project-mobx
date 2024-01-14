import {apiService, IRes} from "./api-service";
import {urls} from "../constants/urls";
import {IPost} from "../interfaces/post-interface";

export const userService = {
    getPosts(): IRes<IPost[]> {
        return apiService.get(urls.users.posts);
    }
};