import './App.css';
import styled from 'styled-components';
import logo from './logo.png';
import "@fontsource/merriweather";

function App() {

  return (
    <Header>
      <img src={logo} className="logo" alt="logo" />
      <form><input placeholder="Search books"></input></form>
    </Header>
  );
}

const Header = styled.div` 
  display: flex;
  justify-content: space-evenly;
`;

export default App;
