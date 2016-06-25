import 'perfect-scrollbar/dist/css/perfect-scrollbar.css';
import './spa-scroll.scss';

import jQuery from 'jquery';
import perfectScrollbar from 'perfect-scrollbar/jquery';

// Pass jQuery to perfect-scrollbar
perfectScrollbar(jQuery);

function spaScrollDirective() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      scrollLayout: '@layout',
      /**
        If the attribute flex-layout isn't present or its value is diferent from 'true',
        A height for the .spa-scroll class must be set via CSS
      */
      scrollFlex: '@flexLayout'
    },
    link: function(scope, element, attributes) {
      jQuery(element).find('.spa-scroll__content').perfectScrollbar().perfectScrollbar('update');
    },
    template: require('./spa-scroll.html')
  };
}

export default angular
  .module('spa.scroll.directive', [])
  .directive('spaScroll', spaScrollDirective)
  .name;
