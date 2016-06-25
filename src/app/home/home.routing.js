function homeRouting($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    parent: 'default',
    title: 'Dashboard',
    ncyBreadcrumb: {
      label: 'Dashboard'
    },
    views: {
      'main@default': {
        templateProvider: $q => {
          return $q(resolve => {
            require.ensure([], () => resolve(require('./home.html')));            
          });
        },
        controller: 'HomeController as vm',
        resolve: {
          loadHomeController: ($q, $ocLazyLoad) => {
            return $q(resolve => {
              require.ensure([], () => {
                let module = require('./home.controller');
                $ocLazyLoad.load({
                  name: module
                });
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
  .module('home.routing', [])
  .config(homeRouting)
  .name;
