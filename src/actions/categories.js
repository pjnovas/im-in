import { req } from 'utils/request';

export function fetch() {
  return {
    type: 'EVENT_CATS',
    payload: req().get('/events/categories')
  };
}
