import 'angular-material-data-table/dist/md-data-table.min.css';
import mdDataTable from 'angular-material-data-table';

function PeopleController(people) {

  var vm = this;

  vm.selected = [];

  vm.query = {
    order: 'name',
    limit: 8,
    page: 1
  };

  vm.people = people;

}

export default angular
  .module('people.controller', [mdDataTable])
  .controller('PeopleController', PeopleController)
  .name;
