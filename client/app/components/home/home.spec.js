import HomeModule from './home'
import HomeComponent from './Home.component';
import HomeController from './Home.controller';

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile, userService, makeController;

  beforeEach(window.module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    userService = $injector.get('userService');
    makeController = () => {
      return new HomeController();
    };
  }));

  describe('Module', () => {
    it('should have a working contact service', function() {
      expect(userService).to.exist;
    });

    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('userService');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<home></home>')(scope);
      scope.$apply();
    });

    it('has "Select a user" in template', () => {
      expect(template.find('span').html()).to.eq('Select a user');
    });

  });
});
