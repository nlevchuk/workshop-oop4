#!/usr/bin/env node

import commander from 'commander';
import GeoService from '../geo-service';

const run = async () => {
  commander
    .usage('[IP]')
    .parse(process.argv);
  const ip = commander.args[0] || '';

  const service = new GeoService();
  const info = await service.getInfoByIP(ip);
  console.log(info.getCity());
};

run();
