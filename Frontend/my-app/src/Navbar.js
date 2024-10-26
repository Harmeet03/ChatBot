import logo from "./BotName.png";
import "./App.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let client_email = localStorage.getItem("Client_Email");
    const Link = useNavigate();
    return(
        <>
            <nav>
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    {
                        localStorage.getItem("Login", "true") ? (
                            <>
                                <span style={{cursor: 'pointer'}}> {client_email} </span>
                                <span style={{cursor: 'pointer'}} onClick={() => {localStorage.removeItem("Client_Email"); localStorage.removeItem("Login"); Link("/login")}}> Sign Out </span>
                            </>
                        ) 
                        : (
                            <a onClick={() => Link("/login")} style={{cursor: "pointer"}}>Sign In</a>
                        )
                    }
                    <a href="#">Clear Chat</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;