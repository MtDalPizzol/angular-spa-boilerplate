export default angular
  .module('crud.constants', [])
  .constant('CRUD', {
    url: {
      list: '',
      add: '/add',
      edit: '/edit/:slug'
    }
  })
  .name;
