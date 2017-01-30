import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userEditComponent from './userEdit.component';

let userEditModule = angular.module('userEdit', [
  uiRouter
])

.component('userEdit', userEditComponent)

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home.userEdit', {
      url: 'user/edit/:userId',
      resolve: { user: ($stateParams,userService) => userService.get($stateParams.userId) },
      component: 'userEdit'
    })
    .state('home.userCreate', {
      url: 'user/create',
      resolve: { user: ($stateParams,userService) => userService.new() },
      component: 'userEdit'
    });
})

.name;

export default userEditModule;
