var referenceController = candidateInformation.controller("referenceController",['$scope', 'cifService', '$state', function ($scope, cifService, $state)  {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    if (angular.isUndefined($scope.candidate.referenceDetails)) {
        //initialize the reference array with two objects
        $scope.candidate.referenceDetails = [{}, {}];
    }
    $scope.submitForm = function () {
        //submit the form store the candidate data to service to be visible to other controllers
        cifService.candidate = $scope.candidate;
        localStorage.setItem("cifFormData", JSON.stringify($scope.candidate));
        $state.go('home');
    }
   

}])