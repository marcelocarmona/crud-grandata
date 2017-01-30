import CommonModule from './common'
import userService from './user.service'

describe('UserService', () => {
  let $rootScope, makeController, userService;

  beforeEach(window.module(CommonModule));
  beforeEach(inject((_userService_) => {
    userService = _userService_;
  }));


  it('has a userService property', () => {
    expect(userService).to.have.property('users');
  });

  it('create a user', () => {
    const usersLength1 = Object.keys(userService.users).length;

    const newUser = userService.new();
    newUser.name = 'name test';

    userService.update(newUser);

    const usersLength2 = Object.keys(userService.users).length;

    expect(usersLength2).to.equal(usersLength1 + 1);
    expect(userService.get(newUser.id).name).to.equal('name test');
  });

  it('delete a user', () => {
    const usersLength1 = Object.keys(userService.users).length;

    const newUser = userService.new();
    newUser.name = 'name test';

    userService.update(newUser);
    userService.delete(newUser.id);

    const usersLength2 = Object.keys(userService.users).length;

    expect(usersLength2).to.equal(usersLength1);
    expect(userService.users[newUser.id]).to.equal(undefined);
  });

  it('update a user', () => {
    const usersLength1 = Object.keys(userService.users).length;

    const newUser = userService.new();
    newUser.name = 'name test';
    newUser.address = 'address test';
    newUser.email = 'email test';
    newUser.phone = 'phone test';
    newUser.image = 'image test'

    userService.update(newUser);

    expect(userService.users[newUser.id].name).to.equal('name test');
    expect(userService.users[newUser.id].address).to.equal('address test');
    expect(userService.users[newUser.id].email).to.equal('email test');
    expect(userService.users[newUser.id].phone).to.equal('phone test');
    expect(userService.users[newUser.id].image).to.equal('image test');
  });

  it('get an user', () => {
    const usersLength1 = Object.keys(userService.users).length;

    const newUser = userService.new();
    newUser.name = 'name test';
    newUser.address = 'address test';
    newUser.email = 'email test';
    newUser.phone = 'phone test';
    newUser.image = 'image test'

    userService.update(newUser);

    expect(userService.users[newUser.id].name).to.equal(userService.get(newUser.id).name);
    expect(userService.users[newUser.id].address).to.equal(userService.get(newUser.id).address);
    expect(userService.users[newUser.id].email).to.equal(userService.get(newUser.id).email);
    expect(userService.users[newUser.id].phone).to.equal(userService.get(newUser.id).phone);
    expect(userService.users[newUser.id].image).to.equal(userService.get(newUser.id).image);
  });

  it('get all user', () => {
    const newUser = userService.new();
    newUser.name = 'name test';
    newUser.address = 'address test';
    newUser.email = 'email test';
    newUser.phone = 'phone test';
    newUser.image = 'image test'

    userService.update(newUser);

    const usersLength1 = Object.keys(userService.users).length;
    const usersLength2 = Object.keys(userService.getAll()).length;

    expect(usersLength2).to.equal(usersLength1);
  });
});
