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
                    <a href="#">Clear Chat</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;