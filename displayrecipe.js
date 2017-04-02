
var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http)
{$scope.displayrecipe = function(){
		$http({method : 'GET', url : 'https://api.metamug.com/recipe/v1.0/recipe/'+$scope.id})
		.then(function(response){
	        var obj = response.data[0];		
			$scope.id=obj.recId;
			$scope.name=obj.recName;
			$scope.serves=obj.recServes;
			$scope.ingredients=obj.recIngr;
			$scope.steps=obj.recSteps;
			$scope.remarks=obj.recRemarks;				
		});		
	};


});
//end controller