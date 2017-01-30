import UserListModule from './userList'
import UserListController from './userList.controller';
import UserListComponent from './userList.component';
import UserListTemplate from './userList.html';

describe('UserList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a userService property', () => {
      let controller = makeController();
      expect(controller).to.have.property('userService');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has user.name in template', () => {
      expect(UserListTemplate).to.match(/{{\s?\user\.name\s?}}/g);
    });

    it('has user.address in template', () => {
      expect(UserListTemplate).to.match(/{{\s?\user\.address\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserListController);
      });
  });
});
