import './login.scss';
import ngMessages from 'angular-messages';

class LoginController {

  constructor($state, $scope, $rootScope, AUTH_EVENTS) {

    let vm = this;

    vm.submitForm = () => {

      if (vm.form.$invalid) {
        return;
      }

      // Hit the server auth logic .then():
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $state.go('home');

    };

  }

}

export default angular
  .module('login.controller', [ngMessages])
  .controller('LoginController', LoginController)
  .name;
