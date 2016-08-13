import config from 'config';
import axios from 'axios';
import { LOCAL_STORAGE_AUTH_TOKEN } from '../constants';

const baseCfg = { baseURL: `${config.apiURL}` };

export function req() {
  return axios.create(Object.assign({}, baseCfg));
}

export function reqAuth() {
  let token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  return axios.create(Object.assign({}, baseCfg, {
    headers: { 'Authorization': `Bearer ${token}` }
  }));
}
