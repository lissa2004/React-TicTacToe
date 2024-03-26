import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "../../components/Header/Header.styled"
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg"
import { useNavigate } from "react-router-dom"
import { SoundEffectsContext } from "../../contexts/SoundEffectsContext"


function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const navigate = useNavigate();
  const {hoverSfx, clickSfx} = useContext(SoundEffectsContext);

  return (
    <HeaderWrapper>
      <Logo className= "logo" 
      onClick={() =>{
        clickSfx();
        navigate("/");
      }}
        onMouseEnter={() => hoverSfx() }/> 
      <span>
        <button 
        onClick={() =>{
          clickSfx()
          toggleTheme();
        }}
          onMouseEnter={() => hoverSfx()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </span>
    </HeaderWrapper>
  );
}

export default Header