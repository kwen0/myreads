import logo from './assets/logo.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const { logout } = useAuth();
    const { currentUser } = useAuth();

    const handleLogOut = async () => {
        await logout();
    };

    return (
        <StyledHeader>
            <img src={logo} className="logo" alt="logo" />
            <HeaderLink>Home</HeaderLink>
            <Link to="/search"><HeaderLink>Search</HeaderLink></Link>
            <HeaderLink>My Books</HeaderLink>
            <Link to="/"><Button onClick={handleLogOut}>Sign out</Button></Link>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(244,241,234);
    align-items: center;
    height: 50px;
`;

const HeaderLink = styled.button`
    height: 50px;
    background: transparent;
    border: none;
    font-family: "Lato";
    padding: 0em 1em;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        color: rgb(244,241,234);
        background-color:rgb(55,34,19);
    }
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const Button = styled.button`
    background: transparent;
    border: none;
    color: rgb(55,34,19);
    font-family: "Lato";
    height: 40px;
    padding: 0.5em;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`