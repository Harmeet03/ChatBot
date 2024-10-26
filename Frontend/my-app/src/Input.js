import "./App.css"
import send from "./send.png"
import { useState } from "react";

const InputBar = () => {
  const [message, setText] = useState('');

  const Send = async (e) => {
    try{
      const response = await fetch(`http://localhost:4000/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      if(response.ok){
        console.log("Message sent");
        setText('');
      }
      else{
        console.log("Message is empty");
      }
    }
    catch(e){
      console.log(`Error while sending: ${e}`);
    }
  }

    return (
      <>
        <form className="input" onSubmit={Send}>
          <input name="message" type="textbox" placeholder="Message ROBOchaT" onChange={(e) => setText(e.target.value)}/>
          <button name="submit" type="submit"><img src={send}/></button>
        </form>
      </>
    );
  }
  
  export default InputBar;