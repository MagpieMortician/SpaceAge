import { UserAge } from '../src/planets-logic.js';

describe('UserAge', function(){
  
  it('should test if the user age is being converted into planetary age', function(){
    let newUser = new UserAge(24);
    expect(newUser.mercury).toEqual(100);
    expect(newUser.venus).toEqual(39);
    expect(newUser.mars).toEqual(13);
    expect(newUser.jupiter).toEqual(2);
  });
});
