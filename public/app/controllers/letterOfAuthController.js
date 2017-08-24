var letterOfAuthController = candidateInformation.controller("letterOfAuthController", ['$scope', '$state','cifService', function ($scope, $state, cifService) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        $state.go('home');      
    }

    angular.element(function () {
        initializeDatepicker();
    })

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
}]);