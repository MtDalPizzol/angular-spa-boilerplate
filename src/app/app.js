import './app.scss';

import core from './core/core.module.js';
import defaultLayout from './layout/default/default-layout.module.js';
import authLayout from './layout/auth/auth-layout.module.js';

angular.module("app", [
    core,
    defaultLayout,
    authLayout
  ]);
