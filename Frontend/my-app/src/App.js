import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/register" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
