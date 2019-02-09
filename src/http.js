import axios from 'axios';

const http = {
  get: async (url, client = axios) => {
    try {
      const response = await client.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return null;
  },
};

export default http;
