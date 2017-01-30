import angular from 'angular';

/**
 * This is the store for users
 * I use the idea of https://github.com/paularmstrong/normalizr
 * schema definition and returning nested entities with their IDs, gathered in dictionaries.
 *
 * @class userService
 */
class userService {

  /**
   * Creates an instance of userService.
   *
   *
   * @memberOf userService
   */
  constructor() {
    this.users = {
      0: { id: 0 , name: 'Marcelo Carmona', address:'San martin 1374', email: 'marcelo@marcelocarmona.com', phone: '(123) 123-1234', image:'profile' },
      1: { id: 1 , name: 'Juan Perez', address:'Moreno 125', email: 'asd@asd.com', phone: '(123) 123-1234', image:'default' },
      2: { id: 2 , name: 'Jose Luis', address:'Rivadavia 13', email: 'asd@asd.com', phone: '(123) 123-1234', image:'default' },
      3: { id: 3 , name: 'Maria Gonzales', address:'Calle 12 n1374', email: 'asd@asd.com', phone: '(123) 123-1234', image:'default' }
    }
    this.idGenerator = 3;
  }

  /**
   * Update and crate user
   *
   * @param {Object} user an user
   *
   * @memberOf userService
   */
  update(user) {
      this.users[user.id] = user;
  }

  /**
   * get an user
   *
   * @param {Number} userId
   * @returns {Object} an inmutable user
   *
   * @memberOf userService
   */
  get(userId) {
    return angular.copy(this.users[userId]);
  }

  /**
   *  Get all users
   *
   * @returns {Object} all users
   *
   * @memberOf userService
   */
  getAll() {
    return this.users;
  }

  /**
   * Delete an user
   *
   * @param {Number} userId
   *
   * @memberOf userService
   */
  delete(userId) {
    delete this.users[userId];
  }

  /**
   * Increment the space of users
   *
   * @returns {Object} an user
   *
   * @see userEdit - the module it is use in the resolve of the ui.route
   * @memberOf userService
   */
  new() {
    this.idGenerator = this.idGenerator + 1
    return {id: this.idGenerator, image: 'default'};
  }

  /**
   * Ask if there are more users
   *
   * @returns {Boolean}
   *
   * @memberOf userService
   */
  isEmpty() {
    return angular.equals(this.users, {})
  }

}

export default userService;
