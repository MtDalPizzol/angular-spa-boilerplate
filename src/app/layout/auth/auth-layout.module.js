export default angular
  .module('auth.layout', [
    require('./auth-layout.routing.js'),
    require('../../login/login.routing.js')
  ])
  .name;
