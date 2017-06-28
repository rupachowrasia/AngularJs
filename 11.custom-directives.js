var app = angular.module("app", []);

app.controller('emp', ['$scope', 'empService', 'empServiceById', function($scope, empService, empServiceById){

	empService.getEmp(function(res){
		$scope.Employee = res;
	});

	$scope.doSearch = function(){
		empServiceById.getEmpById($scope.empSearchNo, function(result){
			console.log(result);
			$scope.empno = result.empno;
			$scope.ename = result.ename;
			$scope.sal = result.sal;
			$scope.deptno = result.deptno;
			$scope.hiredate = result.hiredate;
			$scope.dob = result.dob;
		});
	};

	$scope.msg = "Calling message from controller";
}]);

app.service('empService', ["$http", function($http){
	this.getEmp = function(cb){
		$http({
			url : 'http://localhost:3000/allemp/',
			method : 'get'
		}).then(function(res){
			cb(res.data);
		}, function(err){
			cb(err.data);
		});

	};
}]);

app.service("empServiceById", ["$http", "$log", function($http, $log){
	this.getEmpById = function(empno, cb){
		$http({
			url: 'http://localhost:3000/emp?empno=' + empno,
			method : 'GET'
		}).then(function(res){
			cb(res.data);
		},function(err){
			$log.error("Error Occured");
		});
	};
}]);

app.directive('myMessageInfo', function(){
	return {
		//template : "<strong>My very first message</strong>"
		template : "<strong>{{msg}}</strong>",
	}
});

app.directive('myMessageInfoScript', function(){
	return {
		templateUrl : "templates/my-message-info.html",
	}
});

app.directive('empDetailsAll', function(){
	return {
		templateUrl : "templates/emp-details-all.html"
	}
});

app.directive('empDetails', function(){
	return {
		templateUrl : "templates/emp-details.html"
	}
});