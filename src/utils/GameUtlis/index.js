const checkForSequence = (option1, option2, option3) =>{
    if(option1 === null || option2 === null || option === null)
    return false;
}

export const checkForWinner = (board) =>{
      
    // 0 1 2
    // 3 4 5
    // 6 7 8
     
//    rows
    for(let i; i<9; i+=3){
        if(checkForSequence(board[1], board[i+1], board[i+2]))
        console.log("Row Winner");
    return true
    }

    //    column
    for(let i=0; i<3; i+=1) {
        if(checkForSequence(board[1], board[i+3], board[i+6]))
        console.log("column Winner");
    return true
    }

    // diagnal 1
    if(checkForSequence (board[0], board[4], board[8]))
        console.log("Diagnal winner");
        return true
    }

    if(checkForSequence (board[2], board[4], board[6])){
        console.log("Diagnal winner");
        return true
    }
    // 
      console.log(board);
      if(!board. includes(null)){
        return "draw"
      }
    //    Draw
     
    return false;

