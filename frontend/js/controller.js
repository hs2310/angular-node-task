app.controller("formCtrl", function($scope,$http) {
    $scope.show = false;
    $scope.name = "";
    $scope.status = "";
    $scope.response = "";

    $scope.submit = function(){
        
        $http.post("http://localhost:3001/name", {name : $scope.name}).then(function(res){
            $scope.show = true;
            $scope.status = res.status;
            $scope.response = res.data;
        })
    }
    
  });