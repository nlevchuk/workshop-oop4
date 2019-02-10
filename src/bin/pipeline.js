#!/usr/bin/env node

import { readdirSync } from 'fs';
import List from '../list';

const files = readdirSync('.');
const list = new List(files);
const element = list
  .filter(str => !str.startsWith('.'))
  .sort()
  .middle()
  .plural('s')
  .toUpperCase()
  .puts();
console.log(element);
