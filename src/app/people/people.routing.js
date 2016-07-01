function peopleRouting($stateProvider, CRUD) {

  $stateProvider.state('people', {
    abstract: true,
    parent: 'default',
    url: '/people',
    resolve: {
      loadPeopleDataService: ($q, $ocLazyLoad) => {
        return $q((resolve) => {
          require.ensure([], () => {
            let module = require('./people-data.service');
            $ocLazyLoad.load({
              name: module
            });
            resolve(module);
          });
        });
      }
    }
  })

  .state('people.list', {
    title: 'People',
    url: CRUD.url.list,
    ncyBreadcrumb: {
      label: 'People'
    },
    views: {
      'main@default': {
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], () => resolve(require('./people-list.html')));
          });
        },
        controller: 'PeopleController as vm',
        resolve: {
          loadPeopleController: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], () => {
                let module = require('./people.controller');
                $ocLazyLoad.load({
                  name: module
                });
                resolve(module);
              });
            });
          },
          people: (People) => {
            return People.find();
          }
        }
      }
    }
  })

  .state('people.add', {
    title: 'Add person',
    url: CRUD.url.add,
    ncyBreadcrumb: {
      parent: 'people.list',
      label: 'Add person'
    },
    views: {
      'main@default': {
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], () => resolve(require('./people-form.html')));
          });
        },
        controller: 'PeopleAddController as vm',
        resolve: {
          loadPeopleAddController: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], () => {
                let module = require('./people-add.controller');
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
  .module('people.routing', [])
  .config(peopleRouting)
  .name;
