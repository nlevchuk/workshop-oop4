import axios from 'axios';

class GeoService {
  constructor(http = axios) {
    this.site = 'http://ip-api.com/json';
    this.http = http;
  }

  async getInfoByIP(ip) {
    try {
      const { site, http } = this;
      const url = `${site}/${ip}`;
      const response = await http.get(url);
      const info = response.data;
      return {
        getCity: () => info.city,
      };
    } catch (error) {
      throw new Error('Error while execute request!');
    }
  }
}

export default GeoService;
