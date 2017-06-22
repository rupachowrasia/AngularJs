var app = angular.module('app', []);

app.controller('parent', ['$scope', function($scope){
	$scope.a = 10;
	$scope.b = 20;

	$scope.o = {
		p: 100,
		q: 200
	}

	// for directive test
	$scope.changeValueB = function(){
		$scope.b = 30;
	}

}]);

// child controller
app.controller('child', ['$scope', function($scope){
	$scope.c = 30;
	$scope.d = 40;
}]);

// directive1
app.directive('message', function(){
	return {
		templateUrl : "tmpl-child-scope.html",
		scope: true,

		controller : function($scope, $element, $attrs){
			$scope.c = 100;

			$scope.changeValueA = function(){
				$scope.a = 5;
			}

			$scope.changeValueB = function(){
				$scope.b = 45;
			}
		}
	}
});

// directive2
app.directive('message1', function(){
	return {
		templateUrl : "tmpl-child-scope1.html"
	}
});