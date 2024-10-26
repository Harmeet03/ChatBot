import { useState, useEffect } from "react"
import "./App.css"

const ChatContent = () => {
    const [userMessage, setUserMessage] = useState([]);
    const [botMessage, setBotMessage] = useState([]);

    useEffect (() => {
        Display();
    }, [])

    const Display = async () => {
        try{
            const response = await fetch(`http://localhost:4000/chatbot`);
            if(response.ok){
                const message = await response.json();
                setUserMessage(message);
            }
        }
        catch(e){
            console.log(`Unable to display message: ${e}`);
        }
    }

    return(
        <>
            <div className="chat">
                <div className="messages">
                    {
                        userMessage.map((text, index) => (
                            <div className="right" key={index}>
                                <p>{text.message}</p>
                            </div>
                        ))
                    }
                    <div className="left">
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatContent;