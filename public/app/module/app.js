var candidateInformation = angular.module("candidateInformation", ['ui.router']);

candidateInformation.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'homeController'
        }).
        state('additional', {
            url: '/additional',
            templateUrl: 'app/views/additional.html',
            controller: 'additionalController'
        }).
        state('address', {
            url: '/address',
            templateUrl: 'app/views/address.html',
            controller: 'addressController'
        }).
        state('personal', {
            url: '/personal',
            templateUrl: 'app/views/personal.html',
            controller: 'personalController'
        }).
        // state('navigation', {
        //     url: '/navigation',
        //     templateUrl: 'app/views/navigation.html',
        //     controller: 'navigationController'
        // }).
        state('employment', {
            url: '/employment',
            templateUrl: 'app/views/employment.html',
            controller: 'employmentController'
        }).
        state('education', {
            url: '/education',
            templateUrl: 'app/views/education.html',
            controller: 'educationController'
        }).
        state('emergency', {
            url: '/emergency',
            templateUrl: 'app/views/emergency.html',
            controller: 'emergencyController'
        }).
        state('reference', {
            url: '/reference',
            templateUrl: 'app/views/reference.html',
            controller: 'referenceController'
        }).
        state('summary', {
            url: '/summary?cid',
            templateUrl: 'app/views/summary.html',
            controller: 'summaryController'
        }).
        state('authorization', {
            url: '/letterOfAuth',
            templateUrl: 'app/views/letterOfAuth.html',
            controller: 'letterOfAuthController'
        })

});

candidateInformation.run(function (cifService) {
    var cifData = localStorage.getItem("cifFormData");
    if (!angular.isUndefined(cifData) && cifData!=null) {
        cifService.candidate = JSON.parse(cifData);
    } else {
        cifService.candidate = {};
    }
})

candidateInformation.service('cifService', function ($http) {
    // DETAILS
    this.candidate = {};
    this.saveDetails = function () {
        return $http.post('/db/save', this.candidate);    
    }
    this.getDetails = function(cid) {
        return $http.get('/db/details/' + cid);
    }

    // PDF
    this.getPDF = function(cid) {
        return $http.get('/api/getPDF?cid=' + cid);
    }
})