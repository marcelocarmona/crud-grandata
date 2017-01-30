/**
 * Controller for the list of the users
 *
 * @class UserListController
 */
class UserListController {
  constructor(userService, $state) {
    'ngInject';
    this.userService = userService;
    this.$state = $state;
  }

  /**
   *
   * get all de user from the store
   *
   * @memberOf UserListController
   */
  $onInit() {
    this.users = this.userService.getAll();
  }

  /**
   * go to the edit user panel
   *
   * @param {number} userId
   *
   * @memberOf UserListController
   */
  edit(userId) {
    this.$state.go('home.userEdit', { userId })
  }

  /**
   *  Load an image
   *
   * @param {String} image
   * @returns current url
   *
   * @memberOf UserListController
   */
  loadImage(image) {
    return require(`common/images/${image}.jpg`);
  }
}

export default UserListController;
