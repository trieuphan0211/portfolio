import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { darkTheme } from "./utils/Themes";
import Profile from "./components/section/Profile";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 90vh;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Body>
          <Profile />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
