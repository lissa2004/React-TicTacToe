import React, { useContext } from 'react';
import { Container } from '../../styles/General.styled';
import { GameBoard } from './Games.styled';
import GameCell from '../../components/GameCell/GameCell'; 
import { GameContext } from '../../contexts/GameContext';
import  Player  from '../../components/Player/Player'

function Games() {
  const { game } = useContext(GameContext);

  return (
    <Container columnBased>
      <Player player={game.player1} isPlayerActive={game.player1.choice === game.turn} />
      <GameBoard>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} /> 
        ))}
      </GameBoard>
      <Player  player={game.player2} isPlayerActive={game.player2.choice === game.turn}/>
    </Container>
  );
}

export default Games;

