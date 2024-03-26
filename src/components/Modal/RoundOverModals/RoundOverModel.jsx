import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styles";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModelContext } from "../../../contexts/ModelContext";
import { SoundEffectsContext } from "../../../contexts/SoundEffectsContext";
import { useNavigate } from "react-router-dom";


const RoundOverModel = () => {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModelContext);
  const {hoverSfx, clickSfx, completeSfx} = useContext(SoundEffectsContext); 

  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <Title Primary>
          {game.roundWinner
            ? `${game.roundWinner.name}Wins this Round`
            : "Round Drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choice will be switched</Subtitle>
        <Subtitle primary>
          {game.player1.name} : {game.player1.score}{" "}
        </Subtitle>
        <Subtitle primary>
          {game.player2.name} : {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            clickSfx();
            resetBoard();
            handleModal();
            navigate("/")
          }} onMouseEnter={() => hoverSfx()} 
        >
          Continue
        </Button>
        <Button color="#8437f9" 
        onClick={() =>{
          restartGame();
          handleModal();
          completeSfx();
          navigate("/");
        }}
        onMouseEnter={() => hoverSfx()} >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModel;
