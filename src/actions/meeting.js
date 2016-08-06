import config from 'config';
import { post } from 'axios';

export function create(meeting) {
  return dispatch => {
    dispatch({
      type: 'CREATE_MEETING',
      payload: post(config.apiURL + '/meetings', meeting)
    });
  };
}
