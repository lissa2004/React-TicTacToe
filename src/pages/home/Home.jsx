import React, { useContext } from 'react';
import {Title, Subtitle} from "../../styles/General.styled";
import  Button  from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../styles/General.styled';
import { SoundEffectsContext } from '../../contexts/SoundEffectsContext';

function Home() {
  const navigate = useNavigate();
  const {hoverSfx, clickSfx} = useContext(SoundEffectsContext);
  return (
    <Container columnBased>
    <Title>TicTacToe</Title>
    <Subtitle>Play with your friends the highest score wins!!</Subtitle>
    <Button onClick={() =>{
     clickSfx();
     navigate('/games');
     
    }}
    onMouseEnter={() => hoverSfx()}>Play Now</Button>
    </Container>
  
  );
}

export default Home;