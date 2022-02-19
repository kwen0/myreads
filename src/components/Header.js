import logo from './assets/logo.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const { logOut } = useAuth();

    const handleLogOut = async () => {
        await logOut();
    };

    return (
        <StyledHeader>
            <HeaderLeft>
                <img src={logo} className="logo" alt="logo" />
                <HeaderLink>Home</HeaderLink>
                <Link to="/search"><HeaderLink>Search</HeaderLink></Link>
                <HeaderLink>My Books</HeaderLink>
            </HeaderLeft>
            <Link to="/"><Button onClick={handleLogOut}>Sign out</Button></Link>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgb(244,241,234);
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #EBEBEB;
    @media only screen and (max-width: 600px) {
        justify-content: space-evenly;
    }
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    @media only screen and (max-width: 600px) {
        gap: 0.7em;
    }
`
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