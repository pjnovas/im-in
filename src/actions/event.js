import config from 'config';
import { get, post } from 'axios';

export function create(event) {
  return {
    type: 'EVENT_CREATE',
    payload: post(`${config.apiURL}/events`, event)
  };
}

export function fetch(id) {
  return {
    type: 'EVENT_FETCH',
    payload: get(`${config.apiURL}/events/${id}`)
  };
}
