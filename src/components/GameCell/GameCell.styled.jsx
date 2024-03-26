import React, {useContext} from 'react';
import { CellStyle } from './GameCell.style';
import { GameContext } from '../../contexts/GameContext'
import { checkForWinner } from '../../utils/GameUtlis';
import { ReactComponent as IconO } from "../../assets/svgs/icon-o-.svg";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x-.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/icon-o-outline.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/icon-x-outline.svg";
import {ModalContext} from "../../contexts/ModelContext";
import {RoundOverModal} from "../../components/Modal/RoundOverModals/RoundOverModals.styled"

function GameCell({cellItem, index}) {
  const {updateBoard, game, roundComplete } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext)

  const cellClickHandler = () =>{
    updateBoard(index);
    const results = checkForWinner(game.board)
    if(results){
      roundComplete(results);
      handleModal(<RoundOverModal />)
    }
  };
  if (cellItem === "x"){
    return(
    <CellStyle>
      <IconX  className="markedItem"/>
    </CellStyle>
    )
  }else if( cellItem === "o" ){
    return (
    <CellStyle>
      <IconO className="markedItem"/>
    </CellStyle>
    )
  }
  return(<CellStyle
    onClick={cellClickHandler}>{game.turn ==="x" ? (<XIconOutline className='outlineIcon'/>) : (<OIconOutline  className='outlineIcon'/>)}</CellStyle>)
}
export default GameCell;