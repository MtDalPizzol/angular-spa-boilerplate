import dependencies from './dependencies/dependencies.module.js';
import directives from './directives/directives.module.js';
import constants from './constants/constants.module.js';

import appController from './controllers/app.controller.js';
import appRouting from './configs/app.routing.js';
import appConfig from './configs/app.config.js';

export default angular.module('core', [
    dependencies,
    directives,
    constants,
    appController,
    appRouting,
    appConfig
  ])
  .name;
