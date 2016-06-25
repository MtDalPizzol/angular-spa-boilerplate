function defaultRouting($stateProvider) {
  $stateProvider.state('default', {
    abstract: true,
    views: {
      'layout@': {
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], (require) => resolve(require('./default-layout.html')));
          });
        },
        controller: 'DefaultLayoutController as layoutVm',
        resolve: {
          loadDefaulLayoutController: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], (require) => {
                let module = require('./default-layout.controller');
                $ocLazyLoad.load({
                  name: module
                });
                resolve(module);
              });
            });
          }
        }
      },
      'toolbar@default': {
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], (require) => resolve(require('./default-layout-toolbar.html')));
          });
        },
      },
      'nav@default': {
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], (require) => resolve(require('./default-layout-sidenav.html')));
          });
        },
        controller: 'DefaultLayoutSidenavController as vm',
        resolve: {
          loadDefaultLayoutSidenavController: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], (require) => {
                let module = require('./default-layout-sidenav.controller');
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
  .module('default.routing', [])
  .config(defaultRouting)
  .name;
