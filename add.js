var app = angular.module("addRecipe", []);

app.controller("addController", function($scope, $http){

	$scope.add = function() {
		//check of empty id.
		if(!$scope.id){
			alert("Id not available");
			return;
		}

		try{
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'https://api.metamug.com/recipe/v1.0/recipe');
			var params = "recId=" + $scope.id +"&recName="+$scope.name+"&recServes="
			+$scope.serves+"&recIngr="+$scope.ingredients+"&recSteps="+$scope.steps+
			"&recRemarks="+$scope.remarks+"&q=3";
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(params);	
			$scope.id="";
			$scope.name="";
			$scope.serves="";
			$scope.ingredients="";
			$scope.steps="";
			$scope.remarks="";
			alert("Recipe added successfully.");	
		}catch(e){
			alert("Something went wrong.")
		}
	}
});
