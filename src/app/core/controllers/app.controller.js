class AppController {

  constructor ($rootScope, $scope, $state, AUTH_EVENTS) {

    $scope.session = {

      user: {
        name: 'John Doe'
      },

      isAuthenticated: function () {
        // Call your verification logic here
        return true;
      },

      logut: function () {
        // Logout the user and redirect to the login page
        $state.go('auth.login');
      }

    };

    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, data) {
      // When the user successfuly logs in
      // Attach some user data to the $scope.session.user object
      // $scope.session.user = data;
    });

    if ($scope.session.isAuthenticated()) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
    }

  }

}

AppController.$inject = ['$rootScope', '$scope', '$state', 'AUTH_EVENTS'];

export default angular
  .module('app.controller', [])
  .controller('AppController', AppController)
  .name;
