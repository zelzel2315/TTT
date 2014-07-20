var ticTacToe = angular.module('ticTacToe', []);

ticTacToe.controller('tictacController', function ($scope) {

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
            active: false
          }
        );
      }
      
      $scope.board.push(row);
    }
  }

  $scope.boardInit(6);


  $scope.tileMark = function(tile) {

    if (tile.active == false) {
      tile.active = true;

      if ($scope.playerActive == 1) {
        tile.mark = 'X';
        $scope.playerActive = 2;
      }
      else {
        tile.mark = 'O';
        $scope.playerActive = 1;
      }
    }

    else {
      alert('Don\'t do it, Bro');
    }
    
  }

});
