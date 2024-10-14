import logo from "./BotName.png";
import "./App.css"

const Navbar = () => {
    return(
        <>
            <nav>
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <a href="#">Sign In</a>
                    <a href="#">Clear Chat</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;