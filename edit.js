
var app = angular.module("recipeEdit", []);
	var xhr = new XMLHttpRequest();
app.controller("editController", function($scope, $http){
	
	$scope.edit  = function(){
		xhr.open('PUT', 'https://api.metamug.com/recipe/v1.0/recipe');
		// var params = "recId=" + $scope.id +"&recName="+$scope.name+"&recServes="
		// +$scope.serves+"&recIngr="+$scope.ingredients+"&recSteps="
		// +encodeURIComponent($scope.steps)+
		// 	"&recRemarks="+$scope.remarks;
		var data = new FormData();
		data.append("recId",$scope.id);
		data.append("recName", $scope.name);
		data.append("recServes",$scope.serves);
		data.append("recIngr",$scope.ingredients);
		data.append("recSteps",$scope.steps);
		data.append("recRemarks",$scope.remarks);	
		//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);	
	};
	$scope.display = function(){
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
	// end edit
});
//end controller