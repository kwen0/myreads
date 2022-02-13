import './App.css';
import styled from 'styled-components';
import logo from './logo.png';
import "@fontsource/merriweather";
import "@fontsource/lato";


function App() {

  return (
    <>
      <Header>
        <img src={logo} className="logo" alt="logo" />
      </Header>
      <SignIn>
        Sign in to Myreads
        <Form>
          Email address
          <Input type="text" placeholder="you@yours.com"></Input>
          Password
          <Input type="text"></Input>
        </Form>
        <Button>Sign in</Button>
        <SignUp>
          Not a member?
          <SignUpBtn>Sign up</SignUpBtn>
        </SignUp>
      </SignIn>
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
  justify-content: center;
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
`;

const SignUp = styled.div`
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
`;

export default App;
