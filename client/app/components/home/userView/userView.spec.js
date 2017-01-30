import UserViewModule from './userView'
import UserViewComponent from './userView.component';
import UserViewTemplate from './userView.html';

describe('UserView', () => {
  let $rootScope, makeController, $state, $location;

  beforeEach(window.module(UserViewModule));
  beforeEach(inject((_$rootScope_, $injector) => {
    $rootScope = _$rootScope_;
    $state = $injector.get('$state');
    $location = $injector.get('$location');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has value in template', () => {
      expect(UserViewTemplate).to.match(/{{\s?value\s?}}/g);
    });

    it('has key in template', () => {
      expect(UserViewTemplate).to.match(/{{\s?key\s?}}/g);
    });

    it('has $ctrl.user in template', () => {
      expect(UserViewTemplate).to.match(/\s?\$ctrl\.user\s?/g);
    });


  });

  describe('Component', () => {
      // component/directive specs
      let component = UserViewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserViewTemplate);
      });
  });
});
