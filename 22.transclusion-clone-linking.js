var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope){


}]);

// transclude()
app.directive('message1', function(){
	return {
		templateUrl : 'templates/tmpl-transclusion-clone-linking.html',
		transclude : true,
		controller : function($scope, $element, $attrs, $transclude){
			$element.find('#innerPanel1').append($transclude());
			$element.find('#innerPanel2').append($transclude());
		}
	}
});

// transclude(cb) - clone linking function
app.directive('message2', function(){
	return {
		templateUrl : 'templates/tmpl-transclusion-clone-linking.html',
		transclude : true,
		controller : function($scope, $element, $attrs, $transclude){
			$transclude(function(transEl){
				$element.find('#innerPanel1').append(transEl);
			});

			$transclude(function(transEl){
				$element.find('#innerPanel2').append(transEl);
			});

		}
	}
});



