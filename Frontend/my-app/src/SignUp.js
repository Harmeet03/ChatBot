import logo from "./BotName.png";
import "./App.css"
import bg from "./bg.jpg"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const Link = useNavigate();
    return(
        <>
            <div className="login">
                <div className="left">
                    <img src={bg} className="bg"/>
                </div>
                <form className="right">
                    <span className="logo">
                        <img src={logo} style={{width: "150px"}}/>
                    </span>
                    <h1> Sign Up </h1>
                    <input type="text" placeholder="Enter Name"/>
                    <input type="text" placeholder="Enter Email"/>
                    <input type="text" placeholder="Enter Password"/>
                    <button> Create </button>
                    <a onClick={() => Link("/login")} style={{textAlign: "center", cursor: "pointer"}}>Login if you have already done  this</a>
                    <a onClick={() => Link("/")} style={{cursor: "pointer"}}>Back</a>
                </form>
            </div>
        </>
    )
}

export default SignUp;