import { req, reqAuth } from '../utils/request';

export function create(event) {
  return {
    type: 'EVENT_CREATE',
    payload: reqAuth().post('/events', event)
  };
}

export function fetch(id) {
  return {
    type: 'EVENT_FETCH',
    payload: req().get(`/events/${id}`)
  };
}
