import template from './userList.html';
import controller from './userList.controller';
import './userList.scss';

let userListComponent = {
  restrict: 'E',
  bindings: {
    users: '<'
  },
  template,
  controller
};

export default userListComponent;
