describe('QuantityValidatorService', function() {

  var Mock = {};

  beforeEach(function() {
    module('otus.validation');

    mockCheckboxAnswers();

    inject(function(_$injector_) {
      service = _$injector_.get('QuantityValidatorService');
    });
  });

  it('should return true when answer is not given', function() {
    var answer = {
      'data': {}
    };
    var data = {
      'reference': {}
    };
    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

  it('should return FALSE when the answer.data.array contains more checked elements than is allowed on reference', function() {
    var answer = {
      'data': [Mock.checkboxAnswerTrue, Mock.checkboxAnswerTrue, Mock.checkboxAnswerTrue]
    };
    var data = {
      'reference': 2
    };

    var response = service.execute(answer, data);
    expect(response.result).toEqual(false);
  });

  it('should return FALSE when the answer.data.array contains less checked elements than is allowed on reference', function() {
    var answer = {
      'data': [Mock.checkboxAnswerTrue, Mock.checkboxAnswerFalse, Mock.checkboxAnswerFalse]
    };
    var data = {
      'reference': 2
    };

    var response = service.execute(answer, data);
    expect(response.result).toEqual(false);
  });

  it('should return TRUE when the answer.data.array contains the same number of checked elements on reference', function() {
    var answer = {
      'data': [Mock.checkboxAnswerTrue, Mock.checkboxAnswerTrue, Mock.checkboxAnswerFalse]
    };
    var data = {
      'reference': 2
    };

    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

  function mockCheckboxAnswers() {
    Mock.checkboxAnswerTrue = {
      option: "optionID",
      state: true
    }

    Mock.checkboxAnswerFalse = {
      option: "optionID",
      state: false
    }
  }

});
