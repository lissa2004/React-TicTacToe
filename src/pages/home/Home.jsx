import React from 'react';
import {Title, Subtitle} from "../../styles/General.styled";
import  Button  from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../styles/General.styled';


function Home() {
  const navigate = useNavigate();
  return (
    <Container>
    <Title>TicTacToe</Title>
    <Subtitle>Play with your friends the highest score wins!!</Subtitle>
    <Button onClick={() => navigate('/games')}>Play Now</Button>
    </Container>
  
  );
}

export default Home;