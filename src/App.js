import './App.css';
import styled from 'styled-components';
import logo from './logo.png';
import "@fontsource/merriweather";
import "@fontsource/lato";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config'

function App() {
  const [signupmode, setSignupmode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const handleSignupmode = () => setSignupmode(!signupmode);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (validate_password(newPassword) == false) {
      alert('Password must be at least 6 characters')
      return
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        newEmail,
        newPassword)
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log('hi')
    } catch (error) {
      console.log(error.message)
      alert("Invalid email or password")
    }
  }

  function validate_password(password) {
    return (password.length < 6 ? false : true)
  }

  return (
    <>
      <Header>
        <img src={logo} className="logo" alt="logo" />
      </Header>
      {signupmode ?
        <SignIn>
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
            Not a member?
            <SignUpBtn onClick={handleSignupmode}>Sign up</SignUpBtn>
          </Register>
        </SignIn>
        :
        <SignUp>
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
          <Back onClick={handleSignupmode}>Back</Back>
        </SignUp>
      }
    </>
  );
}

const Header = styled.div` 
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(244,241,234);
  align-items: center;
  padding: 0.5em;
`;

const SignIn = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const SignUp = styled(SignIn)`
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
  width: 10m;
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
  font-size: 12px;
  font-family: "Lato", sans-serif;
`;

const SignUpBtn = styled.button`
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

const Back = styled(SignUpBtn)`
`;

export default App;
