import config from 'config';
import { post } from 'axios';

export function create(event) {
  return dispatch => {
    dispatch({
      type: 'CREATE_EVENT',
      payload: post(config.apiURL + '/events', event)
    });
  };
}
