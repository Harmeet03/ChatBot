import logo from "./BotName.png";
import "./App.css"
// import bg from "./bg.jpg"
import bg from "./bg2.png"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignIn = () => {
    const Link = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const sendData = async (e) => {
        let connection = document.getElementById('connection');
        let error = document.getElementById('error');
        e.preventDefault();
        try{
            const response = await fetch('https://chatbot-wl3s.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if(response.ok){
                console.log("Authorized");
                Link("/");
                localStorage.setItem("Client_Email", email);
                localStorage.setItem("Login", "true");
            }
            else{
                console.error("Invalid Email or Password!");
                localStorage.removeItem("Login");
                error.style.display = 'flex';
                connection.style.display = 'none'
            }
        }
        catch(e){
            console.error(`Error fetching user data: ${e}`);
            connection.style.display = 'flex';
            error.style.display = 'none'
        }
    }

    return(
        <>
            <div className="login">
                <div className="left">
                    <img src={bg} className="bg"/>
                </div>
                <form className="right" onSubmit={sendData}>
                    <div id="error">
                        <p> Invalid Email or Password! </p>
                    </div>
                    <div id="connection">
                        <p> No Internet Connection! </p>
                    </div>
                    <span className="logo">
                        <img src={logo} style={{width: "150px"}}/>
                    </span>
                    <h1> Sign In </h1>
                    <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit"> Done </button>
                    <a onClick={() => Link("/register")} style={{textAlign: "center", cursor: "pointer"}}>Register yourself</a>
                    <a onClick={() => Link("/")} style={{cursor: "pointer"}}>Back</a>
                </form>
            </div>
        </>
    )
}

export default SignIn;