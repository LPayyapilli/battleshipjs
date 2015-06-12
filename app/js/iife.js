var Battleship = (function() {

  var turns = 0;

  var board;
  var p1Board;
  var p2Board;

  var p1 =  {
    set: false
  }

  var p2 = {
    set: false
  }

  var _piecesSet = false;

  var setPlayer;

  var currentPlayer = 0;

  function newGame() {
    console.log("New Game!!!");
    p1.set = false
    p2.set = false
    setBoard();
    _colorChanger();
  };

  function whosTurn() {
    if (currentPlayer === 0) {
      currentPlayer = 1;
    }else if (currentPlayer === 1) {
      currentPlayer = 0;
    }
  }

  var letters = ['a','b','c','d','e','f','g','h','i','j'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var directions = ['w','a','s','d'];

  function _makeBoard() {
    var board = [];
    var row = [];
    for (var i = 0; i < 10; i++) {
      row[i] = [];
      board.push(row[i]);
      for (var f = 0; f < 10; f++) {
        row[i].push(' ');
      }
    }
    console.log(board);
    console.log("Board created");
    return board;
  }


  function setBoard() {
    console.log("Setting board...")
    board = _makeBoard();
    p1Board = _makeBoard();
    p2Board = _makeBoard();
    console.log("Board is now set")
  }

  function setPiece(location,direction) {

    //set which board is to be set up
    (function() {
      if (p1.set===false) {
        setPlayer = "p1.2"
        console.log(" Setting player 1 piece...")
      } else if(p2.set===false) {
        setPlayer = "p2.2"
        console.log(" Setting player 2 piece...")
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
      var column = numbers.indexOf(location.substring(1, 3));
      switch(direction) {
        case 'w':
          if (row < 1) {
            console.log(" Not a valid direction");
          } else if (board[row][column] === ' ' && board[row-1][column]=== ' '){
            board[row][column] = setPlayer;
            board[row-1][column] = setPlayer;
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
          else if (board[row][column]===' ' && board[row][column-1] === ' '){
            board[row][column] = setPlayer;
            board[row][column-1] = setPlayer;
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
          if (row > 8) {
            console.log(" Not a valid direction");
          }
          else if(board[row][column]===' '&&board[row+1][column]===' '){
            board[row][column] = setPlayer;
            board[row+1][column] = setPlayer;
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
          if (column > 8) {
            console.log(" Not a valid direction");
          }
          else if(board[row][column]===' '&&board[row][column+1]===' '){
            board[row][column] = setPlayer;
            board[row][column+1] = setPlayer;
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

  function _colorChanger(){
    for (var row = 0; row < 10; row++) {
      for (var column = 0; column < 10; column++) {
        if (board[row][column]=== "p1.2"){
          var location = "#";
          location += (letters[row] + column);
          $(location).css('background-color', '#1abc9c');
        } else if (board[row][column]=== "p2.2"){
          var location = "#";
          location += (letters[row] + column);
          $(location).css('background-color', '#2ecc71');
        }
        else if (board[row][column]=== "X"){
          var location = "#";
          location += (letters[row] + column);
          $(location).css('background-color', '#c0392b');
        }
        else if (board[row][column]=== "O"){
          var location = "#";
          location += (letters[row] + column);
          $(location).css('background-color', '#ecf0f1');
        }
        else if (board[row][column]=== " "){
          var location = "#";
          location += (letters[row] + column);
          $(location).css('background-color', '#2980b9');
        }
      }
    }
  }

  function _showClosestPlayer1() {
    for (var row = 0; row < 10; row++) {
      for (var column = 0; column < 10; column++) {
        if (board[row][column]=== "p1.2"){
          if (p1Board[row-1][column-1]){
            p1Board[row-1][column-1] = "0"
          }
          if (p1Board[row-1][column]){
            p1Board[row-1][column] = "0"
          }
          if (p1Board[row-1][column+1]){
            p1Board[row-1][column+1] = "0"
          }
          if (p1Board[row][column-1]){
            p1Board[row][column-1] = "0"
          }
          if (p1Board[row][column]){
            p1Board[row][column] = "0"
          }
          if (p1Board[row][column+1]){
            p1Board[row][column+1] = "0"
          }
          if (p1Board[row+1][column-1]){
            p1Board[row+1][column-1] = "0"
          }
          if (p1Board[row+1][column]){
            p1Board[row+1][column] = "0"
          }
          if (p1Board[row+1][column+1]){
            p1Board[row+1][column+1] = "0"
          }
        }
      }
    }
    for (var row = 0; row < 10; row++) {
      for (var column = 0; column < 10; column++) {
        if (p1Board[row][column]=== "0"){
          if (board[row][column]=== "p1.2"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#1abc9c');
          } else if (board[row][column]=== "p2.2"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#2ecc71');
          }
          else if (board[row][column]=== "X"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#c0392b');
          }
          else if (board[row][column]=== "O"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#ecf0f1');
          }
          else if (board[row][column]=== " "){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#2980b9');
          }
        } else{
          var location = "#";
          location += (letters[row] + column);
          $(location).css('background-color', '#2c3e50');
        }
      }
    }
  };

  function _showClosestPlayer2() {
    for (var row = 0; row < 10; row++) {
      for (var column = 0; column < 10; column++) {
        if (board[row][column]=== "p2.2"){
          if (p2Board[row-1][column-1]){
            p2Board[row-1][column-1] = "0"
          }
          if (p2Board[row-1][column]){
            p2Board[row-1][column] = "0"
          }
          if (p2Board[row-1][column+1]){
            p2Board[row-1][column+1] = "0"
          }
          if (p2Board[row][column-1]){
            p2Board[row][column-1] = "0"
          }
          if (p2Board[row][column]){
            p2Board[row][column] = "0"
          }
          if (p2Board[row][column+1]){
            p2Board[row][column+1] = "0"
          }
          if (p2Board[row+1][column-1]){
            p2Board[row+1][column-1] = "0"
          }
          if (p2Board[row+1][column]){
            p2Board[row+1][column] = "0"
          }
          if (p2Board[row+1][column+1]){
            p2Board[row+1][column+1] = "0"
          }
        }
      }
    }
    for (var row = 0; row < 10; row++) {
      for (var column = 0; column < 10; column++) {
        if (p2Board[row][column]=== "0"){
          if (board[row][column]=== "p1.2"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#1abc9c');
          } else if (board[row][column]=== "p2.2"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#2ecc71');
          }
          else if (board[row][column]=== "X"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#c0392b');
          }
          else if (board[row][column]=== "O"){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#ecf0f1');
          }
          else if (board[row][column]=== " "){
            var location = "#";
            location += (letters[row] + column);
            $(location).css('background-color', '#2980b9');
          }
        } else{
          var location = "#";
          location += (letters[row] + column);
          $(location).css('background-color', '#2c3e50');
        }
      }
    }
  };

  function userGuess(guess){
    (function(){
      _colorChanger();
      if (turns % 2 === 0){
        _showClosestPlayer1()
        console.log("player 1 guess ...");
      } else if(turns % 2 === 1){
        _showClosestPlayer2()
        console.log(" payer 2 guess ...");
      }
    })();

    var row = letters.indexOf(guess.charAt(0));
    var column = numbers.indexOf(guess.substring(1, 3));

    console.log("guess in numbers: " + row + " : " + column);
    // FIXME:Uncaught TypeError: Cannot read property '-1' of undefined
    if (board[row][column]===' '){
      board[row][column] = 'O';
      console.log(" You,ve missed");
      turns++;
      whosTurn();
    }
    else if (board[row][column]==='O' || board[row][column]==='X'){
      console.log(" You've already guessed here");
      console.log(" Still your turn");
    }

    else{
      board[row][column] = 'X';
      console.log(" HIT");
      turns++;
      whosTurn();
    }
    (function(){
      _colorChanger();
      if (turns % 2 === 0){
        _showClosestPlayer1()
        console.log("player 1 Turn");
      } else if(turns % 2 === 1){
        _showClosestPlayer2()
        console.log(" payer 2 Turn");
      }
    })();

  }

  function isOver1lost() {
    for (var row = 0; row < 10; row++) {
      for (var column = 0; column < 10; column++) {
        if (board[row][column]=== "p1.2"){
          return false;
        }
      }
    }
    return true;
  }

  function isOver2lost() {
    for (var row = 0; row < 10; row++) {
      for (var column = 0; column < 10; column++) {
        if (board[row][column]=== "p2.2"){
          return false;
        }
      }
    }
    return true;
  }

  return {
    p1: p1,
    p2: p2,
    newGame: newGame,
    setPiece: setPiece,
    piecesSet: _piecesSet,
    colorChanger: _colorChanger,
    showClosestPlayer1: _showClosestPlayer1,
    userGuess: userGuess,
    isOver1lost: isOver1lost,
    isOver2lost: isOver2lost
  }

})();
