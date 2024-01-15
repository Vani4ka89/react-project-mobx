import {postsStore} from "./posts-store";

class RootStore {
    post = postsStore;
}

export const rootStore = new RootStore();