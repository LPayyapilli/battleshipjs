'use strict';

$(document).ready(function(){
  console.log('Page loaded, ready for set up');

  $('body').on('click', function(){
    $('#header_container').fadeOut(1000);
  });


  // init player input values
  var location;
  var key;
  // var local;

  //make board
  Battleship.newGame();

  $('#board_container').click(function(event) {
    location = event.target.id;
    console.log('You clicked: ' + location);
    if (Battleship.piecesSet) {
      Battleship.userGuess(location);
      if (Battleship.isOver1lost()) {
        alert("Player 2 wins");
        setTimeout(function(){
          Battleship.newGame()
          Battleship.piecesSet = false;
          console.log("Starting new Game...")
        },500);
      } else if (Battleship.isOver2lost()) {
        alert("Player One wins");
        setTimeout(function(){
          Battleship.newGame()
          Battleship.piecesSet = false;
          console.log("Starting new Game...")
        },500);
      }
    }
  });


  $('body').keypress(function(e){
    if (e.which!==13) {
      console.log('You pressed: ' + String.fromCharCode(e.which));
      key = String.fromCharCode(e.which);
    }
    else {
      console.log(' You pressed: Enter');
      if (!Battleship.piecesSet) {
        if(!location||!key){
          console.log('please click a square in the bottom board and w-a-s-d for direction to set piece');
        } else {
          console.log(' Setting Piece at: ' + location + ' in direction: ' + key);
          Battleship.setPiece(location,key);
          Battleship.colorChanger();
          if (Battleship.p1.set === true && Battleship.p2.set === true){
            Battleship.piecesSet = true;
            console.log('Both are set');
            // setTimeout(function(){
              Battleship.colorChanger();
              Battleship.showClosestPlayer1();
            // },500);
          }
        }
      }
    }
  });
});
