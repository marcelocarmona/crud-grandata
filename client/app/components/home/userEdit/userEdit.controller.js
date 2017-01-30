/**
 * controller for create or update a user
 *
 * @class UserEditController
 */
class UserEditController {
  constructor($state, userService) {
    'ngInject';
    this.$state = $state;
    this.userService = userService;
  }

  /**
   * Update or create a new user
   *
   * @memberOf UserEditController
   */
  save() {
    this.userService.update(this.user);
    this.$state.go('home.user', {userId: this.user.id});
  }
}

export default UserEditController;
