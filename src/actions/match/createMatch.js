import { CREATE_MATCH } from './constants';

export function createMatch(match) {
  return {
    type: CREATE_MATCH,
    payload: match
  };
}
/*
export function createMatchAsync(match) {
  return function(dispatch) {
    axios.get('http://ksndaksnda')
      .then( res => {
        dispatch({
          type: 'CREATE_MATCH_FULLFILLED',
          payload: res
        })
      .catch( err => {
        dispatch({
          type: 'CREATE_MATCH_REJECTED',
          payload: err
        });
      });
  }
}
*/
