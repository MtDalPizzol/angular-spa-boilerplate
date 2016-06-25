function loginRouting($stateProvider) {
  $stateProvider.state('auth.login', {
    url: '/login',
    views: {
      'main@auth': {
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], () => resolve(require('./login.html')));
          });
        },
        controller: 'LoginController as vm',
        resolve: {
          loadLoginController: ($q, $ocLazyLoad) => {
            return $q(resolve => {
              require.ensure([], (require) => {
                let module = require('./login.controller');
                $ocLazyLoad.load({name: module});
                resolve(module);
              });
            });
          }
        }
      }
    }
  });
}

export default angular
  .module('login.routing', [])
  .config(loginRouting)
  .name;
