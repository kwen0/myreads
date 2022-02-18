import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Search from "./components/Search";
import { useAuth } from "./context/AuthContext";

const RouteSwitch = () => {
    const { currentUser } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={currentUser ? <Home /> : <Navigate to={"/signin"} />} />
                <Route path='/signin' element={!currentUser ? <SignIn /> : <Navigate to={"/"} />} />
                <Route path='/signup' element={!currentUser ? <SignUp /> : <Navigate to={"/"} />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;