import {makeAutoObservable, runInAction} from "mobx";

import {IPost} from "../interfaces/post-interface";
import {userService} from "../services/user-service";

class PostsStore {
    posts: IPost[];
    error = false;

    constructor() {
        makeAutoObservable(this);
    }

    getPostsAction = async () => {
        try {
            const {data} = await userService.getPosts();

            runInAction(() => {
                this.posts = data;
            })
        } catch (e) {
            this.error = true;
        }
    }
}

export const postsStore = new PostsStore();