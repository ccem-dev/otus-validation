describe('ValidationHubService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('ValidationHubService', {
                'MandatoryValidatorService': _$injector_.get('MandatoryValidatorService'),
                'DistinctValidatorService': _$injector_.get('DistinctValidatorService'),
                'FutureDateValidatorService': _$injector_.get('FutureDateValidatorService'),
                'DateInValidatorService': _$injector_.get('DateInValidatorService'),
                'LowerLimitValidatorService': _$injector_.get('LowerLimitValidatorService'),
                'MaxDateValidatorService': _$injector_.get('MaxDateValidatorService'),
                'MaxLengthValidatorService': _$injector_.get('MaxLengthValidatorService'),
                'MinDateValidatorService': _$injector_.get('MinDateValidatorService'),
                'MinLengthValidatorService': _$injector_.get('MinLengthValidatorService'),
                'PastDateValidatorService': _$injector_.get('PastDateValidatorService'),
                'UpperLimitValidatorService': _$injector_.get('UpperLimitValidatorService'),
                'InValidatorService': _$injector_.get('InValidatorService'),
                'PrecisionValidatorService': _$injector_.get('PrecisionValidatorService'),
                'scale': _$injector_.get('ScaleValidatorService'),
                'alphanumeric': _$injector_.get('AlphanumericValidatorService'),
                'lowerCase': _$injector_.get('LowerCaseValidatorService'),
                'specials': _$injector_.get('SpecialsValidatorService'),
                'upperCase': _$injector_.get('UpperCaseValidatorService'),
                'maxTime': _$injector_.get('MaxTimeValidatorService'),
                'minTime': _$injector_.get('MinTimeValidatorService'),
            });
        });
    });

    it('should must have all available validatores', function() {
        expect(service.validators['mandatory']).not.toBeUndefined();
        expect(service.validators['distinct']).not.toBeUndefined();
        expect(service.validators['future-date']).not.toBeUndefined();
        expect(service.validators['date-in']).not.toBeUndefined();
        expect(service.validators['lower-limit']).not.toBeUndefined();
        expect(service.validators['max-date']).not.toBeUndefined();
        expect(service.validators['max-length']).not.toBeUndefined();
        expect(service.validators['min-date']).not.toBeUndefined();
        expect(service.validators['min-length']).not.toBeUndefined();
        expect(service.validators['past-date']).not.toBeUndefined();
        expect(service.validators['upper-limit']).not.toBeUndefined();
        expect(service.validators['in']).not.toBeUndefined();
        expect(service.validators['precision']).not.toBeUndefined();
        expect(service.validators['scale']).not.toBeUndefined();
        expect(service.validators['alphanumeric']).not.toBeUndefined();
        expect(service.validators['lowerCase']).not.toBeUndefined();
        expect(service.validators['specials']).not.toBeUndefined();
        expect(service.validators['upperCase']).not.toBeUndefined();
        expect(service.validators['maxTime']).not.toBeUndefined();
        expect(service.validators['minTime']).not.toBeUndefined();
    });


});
