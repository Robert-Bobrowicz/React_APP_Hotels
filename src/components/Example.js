import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  // const theme = useContext(ThemeContext);

  const [book, setBook] = useState(true);

  function clickHandler() {
    setBook(false);
  }

  function clickGoBackHandler() {
    setBook(true);
  }

  return (
    book ?
      <Link
        to="/bookhotel"
        className="btn btn-secondary text-center mt-4"
        onClick={clickHandler}
      >
        Go for it and book!
      </Link>
      :
      <Link
        to="/"
        className="btn btn-secondary text-center mt-4"
        onClick={clickGoBackHandler}
      >
        Go back
      </Link>
  );
}

export default Example;