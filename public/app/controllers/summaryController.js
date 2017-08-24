
﻿var summaryController = candidateInformation.controller("summaryController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {

    //var cid = $state.params.cid;
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.printPdf=function(){
        window.print();
    }
    angular.element(function(){
        setTimeout(function(){
            $scope.printPdf();
        },1000)
        
    })
        
   
    
}]);