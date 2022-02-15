import './App.css';
import styled from 'styled-components';
import logo from './logo.png';
import "@fontsource/merriweather";
import "@fontsource/lato";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function App() {
  function signIn(e) {
    e.preventDefault();
  }

  const [signupmode, setSignupmode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('')
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSignupmode = () => setSignupmode(false);


  return (
    <>
      <Header>
        <img src={logo} className="logo" alt="logo" />
      </Header>
      {signupmode ? <SignIn>
        Sign in to Myreads
        <Form onSubmit={signIn}>
          Email address
          <Input
            type="text"
            placeholder="you@yours.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          Password
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button>Sign in</Button>
        <Register>
          Not a member?
          <SignUpBtn onClick={handleSignupmode}>Sign up</SignUpBtn>
        </Register>
      </SignIn>
        : <SignUp>
          Sign up for Myreads
          <Form>
            Name
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            Email address
            <Input
              type="text"
              placeholder="you@yours.com"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            Password
            <Input
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form>
          <Button>Sign up</Button>
        </SignUp>}
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
  padding: 1em 2em;
  border: 1px solid #D6D0C4;
  font-size: 14px;
  border-radius: 3px;
  font-family: "Lato", sans-serif;
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
  padding: 2em 1em;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: #00635D;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default App;
