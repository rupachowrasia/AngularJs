var app = angular.module('app', []);

app.controller('parent', ['$scope', function($scope){
	$scope.a = 10;
	$scope.b = 11;

	$scope.p = 12;
	$scope.q = 13;
}]);

app.directive('message', function(){
	return {
		templateUrl : 'tmpl-isolated-scope.html',
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
		templateUrl : 'tmpl-isolated-scope.html',
		scope : {
			x : '@m',
			y : '@n'
		}
	}
});