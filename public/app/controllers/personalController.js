var personalController = candidateInformation.controller("personalController", ['$scope', 'cifService','$state','CandidateService', function ($scope, cifService,$state,CandidateService) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.hasChildren = false;
    if (angular.isUndefined($scope.candidate.personalDetails)) {
        $scope.hasChildren = false;
    } else if (!angular.isUndefined($scope.candidate.personalDetails.children) && $scope.candidate.personalDetails.children.length > 0) {
        $scope.hasChildren = true;
    }
    

    $scope.addChildren = function () {
       // debugger;
        if ($scope.hasChildren && angular.isUndefined($scope.candidate.personalDetails)) {
            $scope.candidate.personalDetails = {};
            $scope.candidate.personalDetails.children = [];
            $scope.candidate.personalDetails.children.push({"name":"","DOB":""});
        } else {
            if ($scope.hasChildren && !angular.isUndefined($scope.candidate.personalDetails.children)) {               
                $scope.candidate.personalDetails.children.push({ "name": "", "DOB": "" });                           
            }
            else if(!$scope.hasChildren){
                //$scope.hasChildren = false;
                $scope.candidate.personalDetails.children = [];
            }
             else {
                $scope.candidate.personalDetails.children = [];
                $scope.candidate.personalDetails.children.push({ "name": "", "DOB": "" });
            }
         
        }
        angular.element(function () {
            initializeDatepicker();
            $('.tooltipped').tooltip({delay: 50});
        })
        
    }
    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        localStorage.setItem("cifFormData", JSON.stringify($scope.candidate));
        $state.go('home');
    }
    function initializeDatepicker() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 150, // Creates a dropdown of 30 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: true, // Close upon selecting a date,
            max: new Date(),
            format: 'dd-mm-yyyy'
        });
    }
    angular.element(function () {
        angular.copy(cifService.candidate, $scope.candidate);
        if($scope.candidate.personalDetails){
            if($scope.candidate.personalDetails.title){
                $("#title").val($scope.candidate.personalDetails.title);
            }
            if($scope.candidate.personalDetails.gender){
                $("#gender").val($scope.candidate.personalDetails.gender);
            }
            
        }
             
        $('select').material_select();
        
        initializeDatepicker(); 
    });

    $scope.deleteChildren = function(index){
        if($scope.candidate.personalDetails.children.length>0){
            $scope.candidate.personalDetails.children.splice(index,1);
        }
    }
}])