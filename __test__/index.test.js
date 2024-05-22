import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('golleh');
  expect(reverse('')).toEqual('');
});
