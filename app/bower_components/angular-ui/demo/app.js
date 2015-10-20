var app = angular.module('ngApp', ['angularUI']);

app.controller('MainCtrl', ['$scope', function($scope){
  
  $scope.target = {
    position: {},
    size: {}
  }

  $scope.test = function(evt, ui){
    console.log(ui)
  }

}]);

