import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styles";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModelContext } from "../../../contexts/ModelContext";

const RoundOverModel = () => {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModelContext);

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
            resetBoard();
            handleModal();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9" onClick={handleRestart}>
          Restart
        </Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModel;
