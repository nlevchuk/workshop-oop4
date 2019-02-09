import getGeo from '../src/get-geo';

test('get', async () => {
  const options = [];
  const parser = {
    getIP: () => {},
  };
  const http = {
    get: () => {},
  };
  const geo = await getGeo(options, parser, http);
  expect(geo).toEqual();
});
