import Navbar from "./Navbar"
import Links from "./Links"
import InputBar from "./Input"
import ChatContent from "./Chat"

const Home = () => {
    return(
        <>
            <Links/>
            <Navbar/>
            <ChatContent/>
            <InputBar/>
        </>
    )
}

export default Home;