var app = angular.module("app", []);

app.controller('sample', ['$scope','$parse','$interpolate', function($scope,$parse,$interpolate){

	$scope.a = 10;
	$scope.b = 20;

	$scope.emp = {
		name : 'rupa',
		address : {
			city : "kol"
		}
	}

	$scope.demo = function(){
		alert("Result : " + ($scope.a + $scope.b));
	};

	// Eval demo example
	$scope.demoEval = function(){
		//alert("Result Eval: " + $scope.$eval("a + b"));

		// var r = $scope.$eval("a + b");
		// alert("Result Eval: " + r);

		// var r = $scope.$eval("emp.address.city");
		// alert(r);

		// var r = $scope.$eval("a * b * 3 * c" , {
		// 	c: 2,
		// 	a: 2
		// });
		// alert(r);

		var r = $scope.$eval(function(scope, locals){
			return scope.a * scope.b * locals.a * locals.c;
		}, {a: 2, c: 2});
		alert(r);
	};

	// parse example
	$scope.demoParse = function(){
		/* var f = $parse("a + b"); // returns function
		var r = f($scope);
		alert("Result Parse: " + r);*/

		//alert("Result Parse: " + $parse("a * b")($scope));

		/* alert("Result Parse: " + $parse("a * b")({
			a: 2,
			b: 3
		}));*/

		/* var f = $parse("a * b"); 
		var r1 = f($scope);
		alert("Result Parse r1 : " + r1);

		var r2 = f({
			a:2,
			b:3
		});
		alert("Result Parse r2 : " + r2);*/

		alert($parse("emp.address.city")($scope));
		//alert($parse("emp.address.city").assign($scope, "Howrah")); 
		$parse("emp.address.city").assign($scope, "Howrah"); // digest process/loop
		alert($parse("emp.address.city")($scope));
	};
	
	$scope.demoInterpolate = function(){
	/* var f = $interpolate("{{a * b}} some other resule {{a * b * 10}}"); // returns function
		var r = f($scope);
		alert("Result Interpolate: " + r);*/

	//alert("Result Interpolate: " + $interpolate("{{a * b}}")($scope));

	alert("Result Interpolate: " + $interpolate("{{a * b | currency: 'USD$'}}")($scope));

	};
	

}]);

