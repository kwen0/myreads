import styled from 'styled-components';
import logo from './assets/logo.png';
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function SignIn() {

    const { signin, guestsignin } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signin(
                email,
                password
            )
        } catch (error) {
            console.log(error.message)
            alert("Invalid email or password")
        }
    }

    const handleGuestSignIn = async (e) => {
        try {
            await guestsignin()
        } catch (error) {
            console.log(error.message)
            alert("Invalid email or password")
        }
    }

    return (
        <>
            <Header>
                <img src={logo} className="logo" alt="logo" />
            </Header>
            <StyledSignIn>
                Sign in to Myreads
                <Form onSubmit={handleSignIn}>
                    Email address
                    <Input
                        type="email"
                        placeholder="you@yours.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    Password
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Sign in</Button>
                </Form>
                <Register>
                    <div>Not a member?</div>
                    <div>
                        <Link to="/signup"><SignUpBtn>Sign up</SignUpBtn></Link>
                        or
                        <SignUpBtn onClick={handleGuestSignIn}>sign in as a guest</SignUpBtn>
                    </div>
                </Register>
            </StyledSignIn>
        </>
    );
}

export default SignIn;

const Header = styled.div`
      display: flex;
      justify-content: space-evenly;
      background-color: rgb(244,241,234);
      align-items: center;
      padding: 0.5em;
      img {
        height: 40px;
      }
      `;

const StyledSignIn = styled.div`
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

const Register = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      font-size: 12px;
      font-family: "Lato", sans-serif;
      `;

const SignUpBtn = styled.button`
      background: transparent;
      margin-top: 0.5em;
      border: none;
      font-family: "Lato", sans-serif;
      font-size: 12px;
      color: #00635D;
      &:hover {
        text-decoration: underline;
      cursor: pointer;
  }
      `;