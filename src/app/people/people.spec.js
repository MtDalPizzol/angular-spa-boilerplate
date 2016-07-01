import './people-data.service.js';
import './people.controller.js';
import './people-add.controller.js';

describe('PEOPLE', function() {

  /*
   * Describe the people.data.service module
   */
  describe('People', function() {

    var People;

    beforeEach(function() {
      angular.mock.module('people.data.service');
    });

    beforeEach(inject(function(_People_) {
      People = _People_;
    }));

    describe('.find()', function() {
      it('should return an array with 10 people', function() {
        expect(People.find().length).toEqual(10);
      });
    });

  });


  /*
   * Describe the people.controller module
   */
  describe('PeopleController', function() {

    var PeopleController;

    beforeEach(function() {
      angular.mock.module('people.controller');
      angular.mock.module('people.data.service');
    });

    beforeEach(inject(function($controller, _People_) {
      PeopleController = $controller('PeopleController', {
        people: _People_.find()
      });
    }));

    it('should have people that were loaded by the People service', function() {
      expect(PeopleController.people).toBeDefined();
      expect(PeopleController.people.length > 0).toBeTruthy();
    });

    it('should have an array to track selected people', function() {
      expect(PeopleController.selected).toBeDefined();
    });

    it('should have a query object for the mdDataTable', function() {
      expect(PeopleController.query).toBeDefined();
    });

    it('should especify the initial page of the list for the mdDataTable', function() {
      expect(PeopleController.query.page).toBeDefined();
    });

  });


  /*
   * Describe the people.add.controller module
   */
  describe('PeopleAddController', function() {

    var PeopleAddController;
    var Notification;
    var $state;

    beforeEach(function() {
      angular.mock.module('ui.router');
      angular.mock.module('people.add.controller');
      angular.mock.module(function($provide) {
        $provide.factory('Notification', function() {
          return {
            success: jasmine.createSpy('success')
          };
        });
      });
    });

    beforeEach(inject(function($controller, _Notification_, _$state_) {
      Notification = _Notification_;
      $state = _$state_;
      spyOn($state, 'go');
      PeopleAddController = $controller('PeopleAddController', {
        Notification: Notification,
        $state: $state
      });
    }));

    it('should show a notification after saving', function() {
      PeopleAddController.save();
      expect(Notification.success).toHaveBeenCalled();
    });

    it('should redirect to the people\'s list after saving', function() {
      PeopleAddController.save();
      expect($state.go).toHaveBeenCalled();
    });

  });


});
