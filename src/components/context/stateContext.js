import React from "react";

const StateContext = React.createContext({
    hotels: []
})

StateContext.displayName = 'StateContext';

export default StateContext;