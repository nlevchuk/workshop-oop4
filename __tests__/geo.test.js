import GeoService from '../src/geo-service';

const http = {
  get: () => ({ data: { city: 'Moscow' } }),
};

test('returns city if ip does not exist', async () => {
  const geo = new GeoService(http);
  const info = await geo.getInfoByIP('');
  expect(info.getCity()).toEqual('Moscow');
});

test('returns city if ip exists', async () => {
  const geo = new GeoService(http);
  const info = await geo.getInfoByIP('134.55.44.2');
  expect(info.getCity()).toEqual('Moscow');
});
