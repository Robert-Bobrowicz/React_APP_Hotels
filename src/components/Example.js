import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: 'red'
  },
  dark: {
    foreground: "#ffffff",
    background: "blue"
  }
};

const ThemeContext = React.createContext(themes.light);

function Example() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button className="btn btn-secondary text-center mt-4" >
      Go for it and book!
    </button>
  );
}

export default Example;