import {makeAutoObservable, runInAction} from "mobx";

import {IPost} from "../interfaces/post-interface";
import {userService} from "../services/user-service";

class PostsStore {
    posts?: IPost[] = [];

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
            console.log(e);
        }
    }
}

export const postsStore = new PostsStore();