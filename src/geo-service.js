import axios from 'axios';

const site = 'http://ip-api.com/json';

class GeoInfo {
  constructor(info) {
    this.info = info;
  }

  getCity() {
    return this.info.city;
  }
}

class GeoService {
  constructor(http = axios) {
    this.http = http;
  }

  async getInfoByIP(ip) {
    const url = `${site}/${ip}`;
    const response = await this.http.get(url);
    return new GeoInfo(response.data);
  }
}

export default GeoService;
