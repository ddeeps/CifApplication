var additionalController = candidateInformation.controller("additionalController",['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        localStorage.setItem("cifFormData", JSON.stringify($scope.candidate));
        $state.go('home');
    }
}])