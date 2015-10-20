'use strict'
angular.module('quentinApp')
	.controller('HeaderCtrl', function($scope, $location){
	
	$scope.isActive = function(page){
		console.log(page);
		return page === $location.path();
	}
});
