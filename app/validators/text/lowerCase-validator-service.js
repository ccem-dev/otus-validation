(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerCaseValidatorService', LowerCaseValidatorService);

    LowerCaseValidatorService.$inject = ['ValidatorResponseFactory'];

    function LowerCaseValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            //Indica que permite texto em minúsculo.

            var result = (model == data.reference.toLowerCase());
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
