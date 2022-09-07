import React from "react";

const colors = {
    primary: {
        color: 'primary'
    },
    secondary: {
        color: 'warning'
    }
}

const ThemeContext = React.createContext(colors.secondary);

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;