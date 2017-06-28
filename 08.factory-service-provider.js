var app = angular.module("app", []);

app.controller("emp", ["$scope", "calcProv", function($scope, calcProv){
	$scope.a = 10;
	$scope.b = 20;
	$scope.doSum = function(){

		// 1. synchornous way
		//$scope.sum = calcFactory.getSum($scope.a, $scope.b);
		//$scope.sum = calcService.getSum($scope.a, $scope.b);
		//$scope.sum = calcProv.getSum($scope.a, $scope.b);

		// 2. using callback(asynchronous way)
		// calcFactory.getSum($scope.a, $scope.b, function(result){
		// 	$scope.sum = result;
		// });
		// calcService.getSum($scope.a, $scope.b, function(result){
		// 	$scope.sum = result;
		// });
		calcProv.getSum($scope.a, $scope.b, function(result){
			$scope.sum = result;
		});
		
	};
}]);

// example of Factory
app.factory("calcFactory", ["$http", "$log", function($http, $log){
	$log.log("Instantiating Factory....");

	// var oCalcfactory = {};

	// // 1. synchornous way
	// oCalcfactory.getSum = function(a, b){
	// 	return parseInt(a) + parseInt(b);
	// };

	// // 2. using callback(asynchronous way)
	// oCalcfactory.getSum = function(a, b, cb){
	// 	var s = parseInt(a) + parseInt(b);
	// 	cb(s);
	// };

	// // 3. web-service
	// oCalcfactory.getSum = function(a, b, cb){
	// 	$http({
	// 		url: 'http://localhost:3000/sum?a=' + a + '&b=' + b,
	// 		method: "GET"
	// 	}).then(function(resp){
	// 		// sucess msg will go here
	// 		$log.log(resp.data);
	// 		cb(resp.data);
	// 	},function(resp){
	// 		// failour msg will go here
	// 		$log.log(resp.data);
	// 	});
	// };

	// return oCalcfactory;
}]);

// example of Service
app.service("calcService", ["$http", "$log", function($http, $log){
	$log.log("Instantiating Service....");

	// // 1. synchornous way
	// this.getSum = function(a, b){
	// 	return parseInt(a) + parseInt(b);
	// };

	// // 2. using callback(asynchronous way)
	// this.getSum = function(a, b, cb){
	// 	var s = parseInt(a) + parseInt(b);
	// 	cb(s);
	// };

	// // 3. web-service
	// this.getSum = function(a, b, cb){
	// 	$http({
	// 		url: 'http://localhost:3000/sum?a=' + a + '&b=' + b,
	// 		method: "GET"
	// 	}).then(function(resp){
	// 		// sucess msg will go here
	// 		$log.log(resp.data);
	// 		cb(resp.data);
	// 	},function(resp){
	// 		// failour msg will go here
	// 		$log.log(resp.data);
	// 	});
	// };

}]);

// example of Provider
app.provider("calcProv", function(){

	var baseUrl = '';
	this.config = function(url){
		baseUrl = url;
	};

	this.$get = ["$log", "$http", function($log, $http){
		$log.log("Instantiating Provider....");
		var objCalcProv = {};

		// 1. synchornous way
		// objCalcProv.getSum = function(a, b){
		// 	return parseInt(a) + parseInt(b);
		// };

		// 2. using callback(asynchronous way)
		// objCalcProv.getSum = function(a, b, cb){
		// 	cb(parseInt(a)+parseInt(b));
		// };

		// 3. web-service
		objCalcProv.getSum = function(a, b, cb) {
			$http({
				url: baseUrl + 'sum?a=' + a + '&b=' + b,
				method: 'GET'
			}).then(function(sucess){
				cb(sucess.data);

			},function(error){
				$log.error(error.data);

			});
		};

		return objCalcProv;
	}];

});

app.config(["calcProvProvider", function(calcProvProvider){
	calcProvProvider.config('http://localhost:3000/');
}]);