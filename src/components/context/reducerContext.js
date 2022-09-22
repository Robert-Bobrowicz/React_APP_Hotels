import React from "react";

const ReducerContext = React.createContext({
    state: {},
    dispatch: () => { }
})

ReducerContext.displayName = 'StateContext';

export default ReducerContext;