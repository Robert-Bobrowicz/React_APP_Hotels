import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import Example from "../Example";

function Footer() {
    const theme = useContext(ThemeContext);

    return (
        <div className="text-center">
            <Example />
            <div className={`text-center m-3 text-${theme}`}>Fotter 2022</div>
        </div>

    )
}

export default Footer;