function authLayoutRouting($stateProvider) {
  $stateProvider.state('auth', {
    abstract: true,
    url: '/auth',
    views: {
      'layout@': {
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], () => resolve(require('./auth-layout.html')));
          });
        },
        controller: 'AuthLayoutController as layoutVm',
        resolve: {
          loadAuthLayoutController: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], () => {
                let module = require('./auth-layout.controller');
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
  .module('auth.layout.routing', [])
  .config(authLayoutRouting)
  .name;
