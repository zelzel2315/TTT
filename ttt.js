var ticTacToe = angular.module('ticTacToe', []);

var e = window.prompt("What size board would you like? Must be at least 6x6");

var wc = Math.floor(e - 2);

// var easy = window.prompt("What level would you like to play? Easy, Medium, or Hard?")
//   function(blockOne);

// var tie = 

// var levelChoice = window.prompt("What level would you like to play? Easy, Medium, or Hard");

// var blockCell


ticTacToe.controller('tictacController', function ($scope) {

// pOneCombos plugs clicked tiles into an array
// pTwoCombos plugs clicked tiles into an array

  $scope.pOneCombos = [];
  $scope.pTwoCombos = [];
  // $scope.blockedCell = [];
  $scope.counterbaby = 1;

  $scope.isOdd = function(value) {
  return (value%2 != 0);
  };

  $scope.whichArray = function(tile) {
    if (tile.playerOneOwns == true) {
      return $scope.pOneCombos;
    } else if (tile.playerTwoOwns == true) {
      return $scope.pTwoCombos;
    // } else if (tile.block == true) {
    //   return $scope.blockedCell;
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
    blockOne();
  };

  var blockOne = function() {
    var i = Math.floor(Math.random() * e);
    var j = Math.floor(Math.random() * e);
    $scope.board[i][j].block = true;
    $scope.board[i][j].active = true; 
    console.log($scope.board[i][j].block);
  };

 $scope.boardInit(e);

  $scope.tileMark = function(tile) {
    console.log("Shit's working");
    if (tile.active == false) {
      if ($scope.isOdd($scope.counterbaby)) {
          tile.active = true;
          // tile.block = false;
          tile.playerOneOwns = true;
          tile.mark = 'X';
          $scope.pOneCombos.push([tile.x,tile.y]);
          console.log($scope.pOneCombos);
          $scope.counterbaby++;
      } else {
          tile.active = true;
          // tile.block = false;
          tile.playerTwoOwns = true;
          tile.mark = 'X';
          $scope.pTwoCombos.push([tile.x,tile.y]);
          console.log($scope.pTwoCombos);
          $scope.counterbaby++;
      }
    } else {
      alert('Don\'t do it, Bro');
    // }    
    // if (tile.block == true) {
    //   console.log("Cells are blocking")
    //       tile.blockedCell = true;
    //       tile.mark = 'X';
    //       $scope.blockedCell.push([tile.x,tile.y]);
    //       console.log($scope.blockedCell);
    //       $scope.counterbaby++;
     }
  };

$scope.checkForWin = function(x,y) {
  console.log("Testing to see " + x + " and " + y);

};

$scope.directionOne = function(array, x, y) {
  $scope.forLooper1(array, x, y);
  $scope.directionTwo(array, x, y);
};

$scope.forLooper1 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x - 1 && array[i][1] == y - 1) {
        $scope.counterOneZeroFive++;
        console.log("counter is: " + $scope.counterOneZeroFive );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper1(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
  };

$scope.directionTwo = function(array, x, y) {
  $scope.forLooper2(array, x, y);
  $scope.directionThree(array, x, y);
};

$scope.forLooper2 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x && array[i][1] == y - 1) {
        $scope.counterTwoZeroSix++;
        console.log("counter is: " + $scope.counterTwoZeroSix );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper2(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
  };

$scope.directionThree = function(array, x, y) {
  $scope.forLooper3(array, x, y);
  $scope.directionFour(array, x, y);
};

$scope.forLooper3 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x + 1 && array[i][1] == y - 1) {
        $scope.counterSevenZeroThree++;
        console.log("counter is: " + $scope.counterSevenZeroThree );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper3(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
  };

$scope.directionFour = function(array, x, y) {
  $scope.forLooper4(array, x, y);
  $scope.directionFive(array, x, y);
};

$scope.forLooper4 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x + 1 && array[i][1] == y ) {
        $scope.counterEightZeroFour++;
        console.log("counter is: " + $scope.counterEightZeroFour );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper4(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
  };

$scope.directionFive = function(array, x, y) {
  $scope.forLooper5(array, x, y);
  $scope.directionSix(array, x, y);
};

$scope.forLooper5 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x + 1 && array[i][1] == y + 1 ) {
        $scope.counterOneZeroFive++;
        console.log("counter is: " + $scope.counterOneZeroFive );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper5(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
};

$scope.directionSix = function(array, x, y) {
$scope.forLooper6(array, x, y);
  $scope.directionSeven(array, x, y);
};

$scope.forLooper6 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x && array[i][1] == y + 1 ) {
        $scope.counterTwoZeroSix++;
        console.log("counter is: " + $scope.counterTwoZeroSix );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper6(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
};

$scope.directionSeven = function(array, x, y) {
  $scope.forLooper7(array, x, y);
  $scope.directionEight(array, x, y);
};

$scope.forLooper7 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x - 1 && array[i][1] == y + 1 ) {
        $scope.counterSevenZeroThree++;
        console.log("counter is: " + $scope.counterSevenZeroThree );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper7(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
};

$scope.directionEight = function(array, x, y) {
  $scope.forLooper8(array, x, y);
};

$scope.forLooper8 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x - 1 && array[i][1] == y  ) {
        $scope.counterEightZeroFour++;
        console.log("counter is: " + $scope.counterEightZeroFour );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper8(array, a, b);
      } else {
        console.log("shit aint working");
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
  $scope.directionOne(array, x, y);
  $scope.checkForWin();
  $scope.counterOneZeroFive = 1;
  $scope.counterTwoZeroSix = 1;
  $scope.counterSevenZeroThree = 1;
  $scope.counterEightZeroFour = 1;

};

// $scope.testArray = [[2,4], [1,4]]; // [[2,3], [1,2], [3,3], [3,2], [4,3], [5,2]];


$scope.checkForWin = function() {
  if ($scope.counterOneZeroFive == $scope.wc && $scope.isOdd($scope.counterbaby) == false) {
    alert("Player One Wins!");
  } else if ($scope.counterOneZeroFive == $scope.wc && $scope.isOdd($scope.counterbaby) == true) { 
    alert("Player Two Wins!");
  } else if ($scope.counterTwoZeroSix == $scope.wc && $scope.isOdd($scope.counterbaby) == false) { 
    alert("Player One Wins!");
  } else if ($scope.counterTwoZeroSix == $scope.wc && $scope.isOdd($scope.counterbaby) == true) { 
    alert("Player Two Wins!");
  } else if ($scope.counterSevenZeroThree == $scope.wc && $scope.isOdd($scope.counterbaby) == false) { 
    alert("Player One Wins!");
  } else if ($scope.counterSevenZeroThree == $scope.wc && $scope.isOdd($scope.counterbaby) == true) { 
    alert("Player Two Wins!");
  } else if ($scope.counterEightZeroFour == $scope.wc && $scope.isOdd($scope.counterbaby) == false) { 
    alert("Player One Wins!");
  } else if ($scope.counterEightZeroFour == $scope.wc && $scope.isOdd($scope.counterbaby) == true) { 
    alert("Player Two Wins!");
  } 
  // else if ($scope.counterbaby == (3*3) + 1) {
  //   alert("Tie!");
  // }
};




});