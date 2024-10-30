import logo from "./BotName.png";
import "./App.css"
import bg from "./bg.png"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignUp = () => {
    const Link = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const sendData = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            if(response.ok){
                console.log("User Registered");
                Link("/login");
            }
            else{
                console.log("Correction to be done!");
            }
        }
        catch(error){
            console.error(`Error registering user: ${error}`);
        }
    }

    return(
        <>
            <div className="login">
                <div className="left">
                    <img src={bg} className="bg"/>
                </div>
                <form className="right" onSubmit={sendData}>
                    <span className="logo">
                        <img src={logo} style={{width: "150px"}}/>
                    </span>
                    <h1> Sign Up </h1>
                    <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit"> Create </button>
                    <a onClick={() => Link("/login")} style={{textAlign: "center", cursor: "pointer"}}>Login if you have already done  this</a>
                    <a onClick={() => Link("/")} style={{cursor: "pointer"}}>Back</a>
                </form>
            </div>
        </>
    )
}

export default SignUp;