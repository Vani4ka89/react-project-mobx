import {makeAutoObservable, runInAction} from "mobx";

import {IUser} from "../interfaces/user-interface";
import {userService} from "../services/user-service";

class UsersStore {
    users: IUser[];
    user:IUser;
    error = false;

    constructor() {
        makeAutoObservable(this)
    }

    getAllUsers = async () => {
        try {
            const {data} = await userService.getUsers();
            runInAction(() => {
                this.users = data;
            })
        } catch (e) {
            this.error = true;
        }
    }

    getUser = async (id:number) => {
        try {
            const {data} = await userService.getById(id);
            runInAction(() => {
                this.user = data;
            })
        } catch (e) {
            this.error = true;
        }
    }
}

export const usersStore = new UsersStore();