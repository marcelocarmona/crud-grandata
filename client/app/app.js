import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-messages';

angular.module('app', [
    uiRouter,
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    Common,
    Components,
  ])
  .config(($locationProvider) => {
    "ngInject";
    // html5Mode
    // $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);
