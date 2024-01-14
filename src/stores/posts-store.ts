import {makeAutoObservable} from "mobx";
import {fromPromise, IPromiseBasedObservable} from "mobx-utils";

import {IPost} from "../interfaces/post-interface";
import {userService} from "../services/user-service";
import {AxiosResponse} from "axios";

class PostsStore {
    posts?: IPromiseBasedObservable<AxiosResponse<IPost[]>>;

    constructor() {
        makeAutoObservable(this);
    }

    getPostsAction() {
        this.posts = fromPromise(userService.getPosts());
    }
}

export const postsStore = new PostsStore();