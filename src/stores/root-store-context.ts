import {createContext, useContext} from "react";

import {rootStore} from "./root-store";

export const RootStoreContext = createContext(rootStore);

export const useStores = () => {
    const context = useContext(RootStoreContext);

    if (!context) {
        throw new Error('');
    }

    return context;
};
