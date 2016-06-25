function appRouting($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

appRouting.$inject = ['$urlRouterProvider', '$locationProvider'];

export default angular
  .module('app.routing', [])
  .config(appRouting)
  .name;
