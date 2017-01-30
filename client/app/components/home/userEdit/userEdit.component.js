import template from './userEdit.html';
import controller from './userEdit.controller';
import './userEdit.scss';

let userEditComponent = {
  restrict: 'E',
  bindings: {
    user: '<'
  },
  template,
  controller
};

export default userEditComponent;
