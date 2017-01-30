import angular from 'angular';
import userService from './user.service';

const commonModule = angular.module('app.common', [])
.service('userService', userService)
.name;

export default commonModule;
