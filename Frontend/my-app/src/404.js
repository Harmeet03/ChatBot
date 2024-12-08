import './App.css'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const Link = useNavigate();
    return(
        <>
        <div className='error'>
            <p onClick={() => Link('/')} style={{cursor: 'pointer'}}> Back </p>
            <div>
                <h1> 404 😔 </h1>
                <p> The page you want does not exist </p>
            </div>
        </div>
        </>
    )
}

export default NotFound;