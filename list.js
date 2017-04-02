
var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http){
$scope.display = function(){
		$http({method : 'GET', url : 'https://api.metamug.com/recipe/v1.0/recipe?q=all'})
		.then(function(response){
			// debugger;
	        var obj = response.data;
	        $scope.recipes = obj;
		});		
	};
	$scope.filter = function(){
		$http({method : 'GET', url : 'https://api.metamug.com/recipe/v1.0/recipe?q=sort_name'})
			.then(function(response){
	        var obj = response.data;
	        $scope.recipes = obj;					
		});		
	};
});
	//end controller