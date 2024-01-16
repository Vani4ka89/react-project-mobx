import {postsStore} from "./posts-store";
import {usersStore} from "./users-store";

class RootStore {
    users = usersStore;
    posts = postsStore;
}

export const rootStore = new RootStore();