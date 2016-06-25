import 'angular-ui-notification/dist/angular-ui-notification.min.css';
import uiNotification from 'angular-ui-notification';

function PeopleAddController(Notification, $state) {

  var vm = this;

  vm.save = function () {

    Notification.success({
      title: 'Yup!',
      message: 'New person saved!'
    });

    $state.go('people.list');

  };

}

export default angular
  .module('people.add.controller', [uiNotification])
  .controller('PeopleAddController', PeopleAddController)
  .name;
