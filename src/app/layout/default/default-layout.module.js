export default angular
  .module('default.layout', [
    require('./default-layout.routing.js'),
    require('../../home/home.routing.js'),
    require('../../people/people.routing.js')
  ])
  .name;
