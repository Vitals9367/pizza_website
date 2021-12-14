import React from "react";
import { cartitemType } from "./utils/types";

interface AppContextInterface {
    state: {
        cartItems: cartitemType[],
        showNotification: boolean,
    },
    update: any,
}

const defaultContext: AppContextInterface = {
    state: {
        cartItems: [],
        showNotification: false,
    },
    update: undefined
}

const AppContext = React.createContext<AppContextInterface>(defaultContext);

export default AppContext;