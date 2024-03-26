import Router  from './Router';
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme } from './styles/Theme';
import { useContext } from 'react';
import {ModalContextProvider} from "./contexts/ModelContext" 
import  { ThemeContext} from "./contexts/ThemeContext"

function App() {
  const {theme} =useContext(ThemeContext)
  console.log(useContext(ThemeContext))
  const mode = (theme === "light" ? lightTheme: darkTheme)
  
  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyles />
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}


export default App;
