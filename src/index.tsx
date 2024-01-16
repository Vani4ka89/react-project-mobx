import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {RootStoreContext} from "./stores/root-store-context";
import {rootStore} from "./stores/root-store";
import {router} from "./router";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RootStoreContext.Provider value={rootStore}>
        <RouterProvider router={router}/>
    </RootStoreContext.Provider>
);

