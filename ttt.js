var ticTacToe = angular.module('ticTacToe', []);

var e = prompt("What size board would you like? Must be at least 6x6");

var levelChoice = prompt("What level would you like to play? Enter '1' for Easy, '2' for Medium, '3' for Hard");

var wc = Math.floor(e - 2);

ticTacToe.controller('tictacController', function ($scope) {

// pOneCombos plugs clicked tiles into an array
// pTwoCombos plugs clicked tiles into an array

  $scope.pOneCombos = [];
  $scope.pTwoCombos = [];
  $scope.blockedCell = [];
  $scope.counterbaby = 1;

  $scope.isOdd = function(value) {
  return (value%2 != 0);
  };

  $scope.whichArray = function(tile) {
    if (tile.playerOneOwns == true) {
      return $scope.pOneCombos;
    } else if (tile.playerTwoOwns == true) {
      return $scope.pTwoCombos;
    } else {
      return $scope.blockedCell;
    }
  };

  $scope.blockCell = function(levelChoice) {
    for (i = 0; i < 3; i++) {
    var i = Math.floor(Math.random() * e);
    var j = Math.floor(Math.random() * e);
    $scope.board[i][j].block = true;
    $scope.board[i][j].active = true; 
    console.log($scope.board[i][j].block);
  }
  };

  $scope.boardInit = function(e) {
    $scope.board = [];   
    for (var i = 0 ; i < e; i++) {     
      var row = [];
      for (var j = 0; j < e; j++) {       
        row.push(
          {
            x: (j + 1),
            y: (i + 1),
            mark: null,
            active: false,
            playerOneOwns: false,
            playerTwoOwns: false,
            block: false
          });
      }  
      $scope.board.push(row);
    }
    $scope.blockCell();
  };

  $scope.boardInit(e);

  var dontDoIt = new Audio('http://www.montypython.net/sounds/hg/noo.wav'); 

  $scope.tileMark = function(tile) {
    console.log(tile.active);
    if (tile.active == false) {
      if ($scope.isOdd($scope.counterbaby)) {
        tile.active = true;
        tile.playerOneOwns = true;
        tile.mark = 'X';
        $scope.pOneCombos.push([tile.x,tile.y]);
        console.log($scope.pOneCombos);
        $scope.counterbaby++;
      } else {
        tile.active = true;
        tile.playerTwoOwns = true;
        tile.mark = 'X';
        $scope.pTwoCombos.push([tile.x,tile.y]);
        console.log($scope.pTwoCombos);
        $scope.counterbaby++;
      }
    } else {
      dontDoIt.play();
      alert("Nooo!");
    }  
  };

  $scope.checkForWin = function(x,y) {
    console.log("Testing to see " + x + " and " + y);

  };


  $scope.arraydir = [[-1,-1, 0], [1,1, 0], [0,1, 1], [0,-1, 1], [1,-1, 2], [-1,1, 2], [-1,0, 3], [1,0, 3]];
  $scope.directionarray = [1,1,1,1];

    $scope.pointDirection = function (array, x, y, arraydir) {
    $scope.searchDirectionLoop(array, x, y, arraydir[0]);
    $scope.searchDirectionLoop(array, x, y, arraydir[1]);
    $scope.searchDirectionLoop(array, x, y, arraydir[2]);
    $scope.searchDirectionLoop(array, x, y, arraydir[3]);
    $scope.searchDirectionLoop(array, x, y, arraydir[4]);
    $scope.searchDirectionLoop(array, x, y, arraydir[5]);
    $scope.searchDirectionLoop(array, x, y, arraydir[6]);
    $scope.searchDirectionLoop(array, x, y, arraydir[7]);
};

  $scope.searchDirectionLoop = function (array, x, y, direction) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] === x + direction[0] && array[i][1] === y + direction[1]) {
        ++$scope.directionarray[direction[2]];
        a = array[i][0];
        b = array[i][1];
        console.log("new coordinates:" + a + b );
        $scope.searchDirectionLoop(array, a, b, direction);
      } else {
        console.log("moved on to Next Loop");
      }  
    }
  };

// these timers needed to be set to 1 to include piece clicked on. -Brant

  $scope.wc = Math.floor(e - 2); //win case 
  $scope.counterOneZeroFive = 1;
  $scope.counterTwoZeroSix = 1;
  $scope.counterSevenZeroThree = 1;
  $scope.counterEightZeroFour = 1;


// Needed to reset counters after each click turn. -Brant
  $scope.clickingBox = function(array, x, y) {
  $scope.pointDirection(array, x, y, $scope.arraydir);
  $scope.checkForWin($scope.directionarray);
  console.log($scope.directionarray);
  $scope.directionarray = [1,1,1,1];

};
  // player one
  var KoNWins = new Audio('http://www.montypython.net/sounds/hg/knightni.wav'); 
  // player two
  var bkWins = new Audio('http://www.intriguing.com/mp/_sounds/hg/knight.wav');
  // tie
  var draw = new Audio('http://www.montypython.net/sounds/hg/itsadraw.wav');

  $scope.checkForWin = function(directionarray) {
  for (i = 0; i < directionarray.length; i++) {
    if (directionarray[i] == $scope.wc && $scope.isOdd($scope.counterbaby) == true) { 
      bkWins.play();
      alert("The Black Knight Wins!");
    } else if (directionarray[i] == $scope.wc && $scope.isOdd($scope.counterbaby) == false) { 
      KoNWins.play();
      alert("The Knights Who Say 'Ni' Win!"); 
    } else if ($scope.counterbaby === (e * e)) {
      draw.play();
      alert("It's a tie!");
    }
  }
};
});

