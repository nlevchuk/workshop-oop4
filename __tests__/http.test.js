import http from '../src/http';

test('return empty json', async () => {
  const client = {
    get: () => ({ data: {} }),
  };
  const result = await http.get('', client);
  expect(result).toEqual({});
});

test('return geo information', async () => {
  const client = {
    get: () => ({ data: { city: 'New York' } }),
  };
  const result = await http.get('https://127.0.0.1/json', client);
  expect(result).toEqual({ city: 'New York' });
});
