import UserEditModule from './userEdit'
import UserEditController from './userEdit.controller';
import UserEditComponent from './userEdit.component';
import UserEditTemplate from './userEdit.html';

describe('UserEdit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserEditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserEditController();
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
    it('has "The name is required" in template', () => {
      expect(UserEditTemplate).to.match(/\s?The name is required\s?/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserEditComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserEditTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserEditController);
      });
  });
});
