import optparser from './optparser';
import httpRequest from './http';

const getGeo = async (options = process.argv, parser = optparser, http = httpRequest) => {
  const site = 'http://ip-api.com/json';
  const ip = parser.getIP(options);
  const url = `${site}/${ip}`;
  const geo = await http.get(url);
  console.log(geo);
};

export default getGeo;
