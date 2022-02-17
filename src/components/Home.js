import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Home(props) {
    const { logout } = useAuth();

    const handleLogOut = async () => {
        await logout();
    };

    return (
        <div>
            HELLO
            <Link to="/"><button onClick={handleLogOut}> Sign Out </button></Link>
        </div>
    )
}

export default Home;