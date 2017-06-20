var app = angular.module("app", []);
app.controller("emp", ["$scope", "empService", "empServiceById", "$filter", function($scope, empService, empServiceById, $filter){

	$scope.Employee = [];
	empService.getEmp(function(result){
		$scope.Employee = result;
	});

	$scope.getEmpDetails = function(){
		empServiceById.getEmpById($scope.empSearchNo, function(result){
			$scope.empno = result.empno;
			$scope.ename = result.ename;
			$scope.sal = result.sal;
			$scope.deptno = result.deptno;
			$scope.hiredate = result.hiredate;
			$scope.dob = result.dob;
			//$scope.ENAME = $filter("uppercase")(result.ename);
		});
	};

}]);

app.service("empService", ["$http", "$log", function($http, $log){
	this.getEmp = function(cb){
		$http({
			url: 'http://localhost:3000/allemp/',
			method : 'GET'
		}).then(function(res){
			cb(res.data);
		},function(err){
			$log.error("Error Occured");
		});
	};
}]);

app.service("empServiceById", ["$http", "$log", "$filter", function($http, $log, $filter){
	this.getEmpById = function(empno, cb){
		$http({
			url: 'http://localhost:3000/emp?empno=' + empno,
			method : 'GET'
		}).then(function(res){
			//res.data.ename = $filter("uppercase")(res.data.ename);
			cb(res.data);
		},function(err){
			$log.error("Error Occured");
		});
	};
}]);