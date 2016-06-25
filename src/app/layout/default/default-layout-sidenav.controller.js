class DefaultLayoutSidenavController {

  constructor () {

    this.items = [{
      title: 'Dashboard',
      icon: 'view-dashboard',
      state: 'home'
    }, {
      title: 'People',
      state: 'people.list',
      icon: 'account-multiple'
    }];

  }

}

export default angular
  .module('default.sidenav.controller', [])
  .controller('DefaultLayoutSidenavController', DefaultLayoutSidenavController)
  .name;
