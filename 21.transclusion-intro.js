var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope){


}]);

// transclude using ng-transclude
app.directive('message', function(){
	return {
		templateUrl : 'templates/tmpl-transclusion-intro.html',
		transclude : true
	}
});

// transclude using link function
app.directive('message2', function(){
	return {
		templateUrl : 'templates/tmpl-transclusion-intro.html',
		transclude : true,
		link : function(scope, iElement, iAttrs, controller, transclude){
			var content = transclude();
			iElement.find('#innerPanel').append(content);
		}
	}
});

// transclude using directive controller
app.directive('message3', function(){
	return {
		templateUrl : 'templates/tmpl-transclusion-intro.html',
		transclude : true,
		controller : function($scope, $element, $attrs, $transclude){
			var content = $transclude();
			$element.find('#innerPanel2').append(content);
		}
	}
});

// using my own transclude directive
app.directive('message4', function(){
	return {
		templateUrl : 'templates/tmpl-transclusion-intro.html',
		transclude : true,
	}
});

// custom ng-transclude directive - "my-transclude"
app.directive('myTrnasclude', function(){
	return {
		templateUrl : 'templates/tmpl-transclusion-intro.html',
		link : function(scope, ele, attr, contr, trans){
			ele.append(trans());
		}
	}
});

