import template from './userView.html';
import './userView.scss';

let userViewComponent = {
  restrict: 'E',
  bindings: {
    user: '<'
  },
  template
};

export default userViewComponent;
