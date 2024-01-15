import {IPost} from "../interfaces/post-interface";
import {urls} from "../constants/urls";
import {apiService, IRes} from "./api-service";

export const userService = {
    getPosts(): IRes<IPost[]> {
        return apiService.get<IPost[]>(urls.users.posts);
    }
}