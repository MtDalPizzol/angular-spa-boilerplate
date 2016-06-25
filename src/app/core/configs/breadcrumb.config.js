export default function breadcrumbConfig($breadcrumbProvider) {
  $breadcrumbProvider.setOptions({
    prefixStateName: 'home',
    template: require('./breadcrumb.html')
  });
}

breadcrumbConfig.$inject = ['$breadcrumbProvider'];
