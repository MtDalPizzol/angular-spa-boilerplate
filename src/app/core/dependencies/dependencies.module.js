import 'angular-material/angular-material.min.css';

import _ from 'lodash';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';
import ngMaterial from 'angular-material';
import ngBreadcrumb from 'angular-breadcrumb';

import ngMaterialConfig from '../configs/ngMaterial.config.js';
import breadcrumbConfig from '../configs/breadcrumb.config.js';

export default angular.module('core.dependencies.module', [
    uiRouter,
    ocLazyLoad,
    ngMaterial,
    'ncy-angular-breadcrumb'
  ])
  .config(ngMaterialConfig)
  .config(breadcrumbConfig)
  .name;
