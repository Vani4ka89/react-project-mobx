import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';

import {RootStoreContext} from "./stores/root-store-context";
import {rootStore} from "./stores/root-store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RootStoreContext.Provider value={rootStore}>
        <App/>
    </RootStoreContext.Provider>
);

