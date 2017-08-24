var addressController = candidateInformation.controller("addressController",['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    
    $scope.$watch('sameAddress', function(newValue, oldValue) {
        if (newValue) {
            if (angular.isUndefined($scope.candidate.addressDetails)) {
                $scope.sameAddress = false;
                alert("Please fill in Current address first.");
                return;
            } else {
                $scope.candidate.addressDetails.permanent = $scope.candidate.addressDetails.current;
            }
            
        } else if (newValue==false) {
            $scope.candidate.addressDetails.permanent={};
        }
            
    }, true);
    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        localStorage.setItem("cifFormData", JSON.stringify($scope.candidate));
        $state.go('home');
    }
}])