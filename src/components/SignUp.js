import styled from 'styled-components';
import logo from './assets/logo.png';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUp() {
    const { register } = useAuth();

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (validatePassword(newPassword) == false) {
            alert('Password must be at least 6 characters')
            return
        }
        try {
            await register(
                newEmail,
                newPassword
            )
        } catch (error) {
            console.log(error.message);
        }
    }

    const validatePassword = (password) => {
        return (password.length < 6 ? false : true)
    }

    return (
        <>
            <Header>
                <img src={logo} className="logo" alt="logo" />
            </Header>
            <StyledSignUp>
                Sign up for Myreads
                <Form onSubmit={handleSignUp}>
                    Email address
                    <Input
                        type="email"
                        placeholder="you@yours.com"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                    Password
                    <Input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Button type="submit">Sign up</Button>
                </Form>
                <Link to="/signin"><Back>Back</Back></Link>
            </StyledSignUp>
        </>
    );
}

export default SignUp;

const Header = styled.div`
      display: flex;
      justify-content: space-evenly;
      background-color: rgb(244,241,234);
      align-items: center;
      padding: 0.5em;
      `;

const StyledSignUp = styled.div`
      display: flex;
      height: 60vh;
      flex-direction: column;
      align-items: center;
      padding: 2em;
      `;

const Form = styled.form`
      display: flex;
      flex-direction: column;
      font-size: 12px;
      padding: 2em;
      gap: 1em;
      font-family: "Lato", sans-serif;
      `;

const Input = styled.input`
      padding: none;
      margin: none;
      width: 12em;
      height: 2em;
      font-family: "Lato", sans-serif;
      `;

const Button = styled.button`
      background-color: rgb(244,241,234);
      width: 7em;
      padding: 1em;
      margin-top: 1em;
      border: 1px solid #D6D0C4;
      font-size: 14px;
      border-radius: 3px;
      font-family: "Lato", sans-serif;
      align-self: center;
      &:hover {
        background-color: #EDE6D6;
      cursor: pointer;
  }
      `;

const Back = styled.button`
      background: transparent;
      border: none;
      font-family: "Lato", sans-serif;
      font-size: 12px;
      color: #00635D;
      &:hover {
        text-decoration: underline;
      cursor: pointer;
  }
      `;