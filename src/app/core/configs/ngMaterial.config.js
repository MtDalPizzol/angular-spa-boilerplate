export default function ngMaterialConfig($mdThemingProvider, $mdIconProvider) {

  $mdThemingProvider.theme('default')
  .primaryPalette('light-blue')
  .accentPalette('pink');
  $mdIconProvider.defaultIconSet('mdi.svg');

}

ngMaterialConfig.$inject = ['$mdThemingProvider', '$mdIconProvider'];
