import logo from "./BotName.png";
import "./App.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const Link = useNavigate();
    return(
        <>
            <nav>
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <a onClick={() => Link("/login")} style={{cursor: "pointer"}}>Sign In</a>
                    <a href="#">Clear Chat</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;