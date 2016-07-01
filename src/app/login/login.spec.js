import './login.controller.js';

describe('LOGIN', function(){

  var LoginController;

  /*
   * Describe the login.controller module
   */
  describe('LoginController', function() {

    beforeEach(function() {
      angular.mock.module('ui.router');
      angular.mock.module('login.controller');
      angular.mock.module(function($provide) {
        $provide.constant('AUTH_EVENTS', {
          loginSuccess: 'auth-login-success'
        });
      });
    });

    var $state;
    beforeEach(inject(function($controller, $rootScope, _$state_, _AUTH_EVENTS_) {
      $state = _$state_;
      spyOn($state, 'go');
      LoginController = $controller('LoginController', {
        $rootScope: $rootScope,
        $state: $state,
        AUTH_EVENTS: _AUTH_EVENTS_
      });
      LoginController.form = {
        $invalid: false
      };
    }));

    it('should redirect the user when the form is valid', function() {
      LoginController.submitForm();
      expect($state.go).toHaveBeenCalled();
    });

    it('shouldn\'t redirect the user when the form is invalid', function() {
      LoginController.form.$invalid = true;
      LoginController.submitForm();
      expect($state.go).not.toHaveBeenCalled();
    });

  });

});
