var employmentController = candidateInformation.controller("employmentController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    if (angular.isUndefined($scope.candidate.employmentDetails)) {
        $scope.candidate.employmentDetails = {};
        $scope.candidate.employmentDetails.employers = [{}]
    }
    $scope.addEmployer = function () {
        $scope.candidate.employmentDetails.employers.push({});
        angular.element(function () {
            $('select').material_select();
            initializeDatepicker();
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
            selectYears: 30, // Creates a dropdown of 30 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: true, // Close upon selecting a date,
            max: new Date(),
            format: 'dd-mm-yyyy'
        });
    }
    angular.element(function () {
        $('select').material_select();
        initializeDatepicker();
    });

    $scope.deleteEmployer = function(index){
        if($scope.candidate.employmentDetails.employers.length>0){
            $scope.candidate.employmentDetails.employers.splice(index,1);
        }
    }

}])