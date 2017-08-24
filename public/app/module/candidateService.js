candidateInformation.service('CandidateService', function () {
    this.validateMob = function (val) {
        if (/^\d{10}$/.test(val)) {
          return true;
        }
        return false;
    }
})