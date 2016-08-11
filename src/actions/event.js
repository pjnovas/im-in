import config from 'config';
import axios from 'axios';

const baseCfg = {
  baseURL: `${config.apiURL}`
};

const req = axios.create(Object.assign({}, baseCfg));

const reqAuth = axios.create(Object.assign({}, baseCfg, {
  headers: { 'Authorization': 'Bearer 1234' }
}));

export function create(event) {
  return {
    type: 'EVENT_CREATE',
    payload: reqAuth.post('/events', event)
  };
}

export function fetch(id) {
  return {
    type: 'EVENT_FETCH',
    payload: req.get(`/events/${id}`)
  };
}
