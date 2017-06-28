var app = angular.module('app', []);

app.controller('parent', ['$scope', function($scope){

	// for string
	$scope.a = 10;
	$scope.b = 11;
	$scope.p = 12;
	$scope.q = 13;

	// for object
	$scope.emp = {
		empno : 1001,
		name : "test"
	}

	$scope.emp2 = {
		empno : 1002,
		name : "test2"
	}

	// for function
	$scope.x = 10;
	$scope.y = 11;
	$scope.doSum = function(x, y){
		var r = parseInt(x) + parseInt(y);
		alert('Sum ' + r);
	}

}]);

// accessed string from directive
app.directive('message', function(){
	return {
		templateUrl : 'tmpl-isolated-scope-str.html',
		scope : {
			x : '@',
			y : '@'
		},
		controller : function($scope, $element, $attrs){
			$scope.doProcess = function(){
				var r = parseInt($scope.x) + parseInt($scope.y);
				alert("Sum " + r);
			}
		}
	}
});
app.directive('message2', function(){
	return {
		templateUrl : 'tmpl-isolated-scope-str.html',
		scope : {
			x : '@m',
			y : '@n'
		}
	}
});

// accessed object from directive
app.directive('messageObj', function(){
	return {
		templateUrl : 'tmpl-isolated-scope-obj.html',
		scope : {
			employee : '='
		}
	}
});
app.directive('messageObj2', function(){
	return {
		templateUrl : 'tmpl-isolated-scope-obj.html',
		scope : {
			employee : '=oEmp'
		}
	}
});

// accessed function from directive
app.directive('messageFun', function(){
	return {
		templateUrl : 'tmpl-isolated-scope-fun.html',
		scope : {
			//extSum : '&'
			extSum : '&justSum'
		},

		controller : function($scope, $element, $attrs){
			$scope.doProcess = function(){
				$scope.extSum({m : $scope.x, n : $scope.y * ($scope.$parent.x)});
			}
		}
	}
});