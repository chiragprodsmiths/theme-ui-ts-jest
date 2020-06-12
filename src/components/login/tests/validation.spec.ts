import { validationSchema } from '../login.validation';

describe('Login Schema Validation', () => {
  test('invalid schema ', async () => {
    const loginRequest = {
      email: 'ross@jkrbinvestments.com',
      password: 'Ross Bulat',
    };
    const isValid = await validationSchema.validate(loginRequest);
    console.log(isValid);
    expect(isValid).toEqual('true');
  });
});
