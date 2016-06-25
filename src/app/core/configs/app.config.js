function stateChangeHandler($rootScope, $state, $timeout) {

  $rootScope.$on('$stateChangeStart',
    function(event, next, nextParams, prev, prevParams) {

      var authRequired = false;

      // Check if the state needs authentication
      if (next.data && next.data.authRequired) {
        authRequired = true;
      }

      // If yes and if this user is not logged in, redirect him to the login page
      if (authRequired && !$auth.isAuthenticated()) {
        event.preventDefault();
        $state.go('auth.login');
      }

    }
  );

  // Handle the page metatags
  $rootScope.$on('$stateChangeSuccess',
    function(event, next, nextParams, prev, prevParams) {

      $rootScope.stateTitle = (next.title) ? next.title : 'My SPA Title';

    }
  );

}

stateChangeHandler.$inject = ['$rootScope', '$state', '$timeout'];

export default angular
  .module('app.config', [])
  .run(stateChangeHandler)
  .name;
