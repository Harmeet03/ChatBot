import { useState, useEffect } from "react"
import "./App.css"

const ChatContent = () => {
    const [message, setMessage] = useState([]);

    useEffect (() => {
        Display();
    }, [])

    const Display = async () => {
        try{
            const response = await fetch(`https://chatbot-python-c6nb.onrender.com/chatbots`);
            if(response.ok){
                const messages = await response.json();
                setMessage(messages);
            }
        }
        catch(e){
            console.log(`Unable to display message: ${e}`);
        }
    }

    return(
        <>
            <div className="chat">
                {
                    message.map((text) => (
                        <div className="messages">
                            <div className="right">
                                <p>{text.user}</p>
                            </div>
                            <div className="left">
                                <p>{text.bot}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ChatContent;