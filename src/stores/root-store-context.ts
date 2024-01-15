import {createContext, useContext} from "react";

import {rootStore} from "./root-store";

const RootStoreContext = createContext(rootStore);

const useStores = () => {
    const context = useContext(RootStoreContext);

    if (!context) {
        throw new Error('You forgot add context');
    }

    return context;
}


export {
    RootStoreContext,
    useStores
};