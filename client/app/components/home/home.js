import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import UserList from './userList/userList';
import UserView from './userView/userView';
import UserEdit from './userEdit/userEdit';
import common from 'common/common';
import './home.scss';

let homeModule = angular.module('home', [
  common,
  uiRouter,
  UserList,
  UserView,
  UserEdit
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
