import {createContext, useContext} from "react";

import {RootStore} from "./root-store";

const RootStoreContext = createContext<RootStore | null>(null);

const useStores = () => {
    const context = useContext(RootStoreContext);

    if (context === null) {
        throw new Error('');
    }

    return context;
};

export {
    RootStoreContext,
    useStores
};