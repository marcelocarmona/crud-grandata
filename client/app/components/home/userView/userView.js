import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userViewComponent from './userView.component';

let userViewModule = angular.module('userView', [
  uiRouter
])

.component('userView', userViewComponent)

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home.user', {
      url: 'user/:userId',
      resolve: { user: ($stateParams,userService) => userService.get($stateParams.userId) },
      component: 'userView'
    });
})

.name;

export default userViewModule;
