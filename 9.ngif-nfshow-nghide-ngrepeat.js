var app = angular.module("app", []);
app.controller("emp", ["$scope", "empService", "empServiceById", function($scope, empService, empServiceById){

	empService.getEmp(function(r){
		$scope.Employee = r;
	});

	$scope.getEmpDetails = function(){
		empServiceById.getEmpById($scope.empSearchNo, function(result){
			$scope.empno = result.empno;
			$scope.ename = result.ename;
			$scope.sal = result.sal;
			$scope.deptno = result.deptno;
			$scope.hiredate = result.hiredate;
			$scope.dob = result.dob;
			$scope.isSalAbove6kb = parseInt(result.sal) > 6000;
		});
	};
}]);

app.service("empServiceById", ["$http", "$log", function($http, $log){
	this.getEmpById = function(empno, cb){
		$http({
			url: 'http://localhost:3000/emp?empno=' + empno,
			method : 'GET'
		}).then(function(sucess){
			cb(sucess.data);
		},function(error){
			$log.error("Error occured");
		});
	};
}]);

app.service("empService",  ["$http", "$log",  function($http, $log){
	this.getEmp = function(cb){
		$http({
			url: 'http://localhost:3000/allemp/',
			method : 'GET'
		}).then(function(sucess){
			cb(sucess.data);
		},function(error){
			$log.info(error.data);
		});
	};

}]);
