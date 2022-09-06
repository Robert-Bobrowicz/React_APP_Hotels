import ThemeContext from "../context/themeContext";

function Footer(props) {
    return (
        <ThemeContext.Consumer>
            {value => 
                <div className={`text-center m-3 text-${value}`}>Fotter 2022</div>
            }
        </ThemeContext.Consumer>
    )
}

export default Footer;