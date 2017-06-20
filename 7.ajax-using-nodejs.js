var app = angular.module("app", []);

app.controller("emp", ["$scope", "$http", "$log", function($scope, $http, $log){
	$scope.a = 10;
	$scope.b = 20;
	$scope.doSum = function(){
		//$scope.sum = parseInt($scope.a) + parseInt($scope.b);
		
		// calling via web service
		$http({
			url:"http://localhost:3000/sum?a=" + $scope.a +"&b="+ $scope.b,
			method:"get"
		}).then(
			function(resp){
				// sucess message will here
				debugger;
				$log.log(resp.data);
				$scope.sum = resp.data;
			},
			function(resp){
				// failure message will go here
				$log.error("Error occurred");
			}
		);
	};
}]);