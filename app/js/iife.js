var Project = (function() {

  function newGame() {
    setBoard();
  };

  function _makeBoard() {
    var board = [];
    var row = [];
    for (var i = 0; i < 6; i++) {
      row[i] = [];
      board.push(row[i]);
      for (var f = 0; f < 6; f++) {
        row[i].push(' ');
      }
    }
    console.log("Board created");
    return board;
  }


  function setBoard() {
    console.log("Setting boards...")
    board = _makeBoard();

    console.log("Boards are now set")
  }

  function setPiece(location,direction) {

    var board;
    //set which board is to be set up
    (function() {
      if (p1.set===false) {
        board = p1.board;
        console.log(" Setting board 1 piece...")
      } else if(p2.set===false) {
        board = p2.board;
        console.log(" Setting board 2 piece...")
      } else {
        console.log(" Both boards are set");
      }
    })();

    //sets pieces based on location and direction for both players based on above function
    //works with bad input
    if (directions.indexOf(direction)===-1) {
      console.log(" Not a valid direction");
    } else {
      var row = letters.indexOf(location.charAt(0));
      var column = numbers.indexOf(location.charAt(1));
      switch(direction) {
        case 'w':
          if (row < 1) {
            console.log(" Not a valid direction");
          } else if (board[row][column] === ' ' && board[row-1][column]=== ' ' && board[row-2][column]===' '){
            board[row][column] = '2';
            board[row-1][column] = '2';
            if (p1.set===false){
              p1.set = true;
              console.log("board 1 piece is set")
            }else if (p2.set===false){
              p2.set = true;
              console.log("board 2 piece is set")
            }
          }
          else {
            console.log( "there is something already there");
          }
          break;
        case 'a':
          if (column < 1) {
            console.log(" Not a valid direction");
          }
          else if (board[row][column]===' ' && board[row][column-1] === ' ' && board[row][column-2] === ' '){
            board[row][column] = '2';
            board[row][column-1] = '2';
            if (p1.set===false){
              p1.set = true;
              console.log("board 1 piece is set")
            }else if (p2.set===false){
              p2.set = true;
              console.log("board 2 piece is set")
            }
          }
          else{
            console.log( "there is something already there");
          }
          break;
        case 's':
          if (row > 4) {
            console.log(" Not a valid direction");
          }
          else if(board[row][column]===' '&&board[row+1][column]===' '&&board[row+2][column]===' '){
            board[row][column] = '2';
            board[row+1][column] = '2';
            if (p1.set===false){
              p1.set = true;
              console.log("board 1 piece is set")
            }else if (p2.set===false){
              p2.set = true;
              console.log("board 2 piece is set")
            }
          }
          else{
            console.log( "there is something already there");
          }
          break;
        case 'd':
          if (column > 4) {
            console.log(" Not a valid direction");
          }
          else if(board[row][column]===' '&&board[row][column+1]===' '&&board[row][column+2]===' '){
            board[row][column] = '2';
            board[row][column+1] = '2';
            if (p1.set===false) {
              p1.set = true;
              console.log("board 1 piece is set")
            }else if (p2.set===false){
              p2.set = true;
              console.log("board 2 piece is set")
            }
          }
          else{
            console.log( "there is something already there");
          }
          break;
      }
    }
  }

  return {
    newGame: newGame,
    setPiece: setPiece
  }

})();
