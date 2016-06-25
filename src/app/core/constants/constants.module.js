import authEvents from './auth.events.constants.js';
import crud from './crud.constants.js';

export default angular.module('core.constants.module', [
    authEvents,
    crud
  ])
  .name;
