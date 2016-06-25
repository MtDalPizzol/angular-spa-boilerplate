import './default-layout.scss';

class DefaultLayoutController {

 constructor ($mdSidenav) {

   var vm = this;

   vm.toggleSidenav = function (id) {
     $mdSidenav(id).toggle();
   };

 }

}

export default angular
  .module('default.layout.controller', [])
  .controller('DefaultLayoutController', DefaultLayoutController)
  .name;
