
var app = angular.module("dltRecipe", []);
var xhr = new XMLHttpRequest();
app.controller("dltController", function($scope, $http)
{
	$scope.delete  = function(){
		$http({method : 'DELETE', url : 'https://api.metamug.com/recipe/v1.0/recipe/'+$scope.id})
		.then(function(response){
			$scope.id="";
			$scope.name="";
			$scope.serves="";
			$scope.ingredients="";
			$scope.steps="";
			$scope.remarks="";			
	    	alert(response.status);  	  				
		});	
	};
	$scope.display = function(){
		
		$http({method : 'GET', url : 'https://api.metamug.com/recipe/v1.0/recipe/'+$scope.id})
		.then(function(response){
			try{
	        var obj = response.data[0];		
			$scope.id=obj.recId;
			$scope.name=obj.recName;
			$scope.serves=obj.recServes;
			$scope.ingredients=obj.recIngr;
			$scope.steps=obj.recSteps;
			$scope.remarks=obj.recRemarks;				
			}
			catch(e){
			alert("Recipe is not present for the entered ID");
		}	
		});	
		

	};

});
//end controller