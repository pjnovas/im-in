import { req, reqAuth } from '../utils/request';

export function sendToken(email) {
  return {
    type: 'AUTH_SEND_TOKEN',
    payload: req().post('/auth', { email })
  };
}

export function login() {
  return {
    type: 'AUTH_LOGIN',
    payload: reqAuth().get('/auth')
  };
}

export function logout() {
  return {
    type: 'AUTH_LOGOUT',
    payload: reqAuth().delete('/auth')
  };
}

export function update(updates) {
  return {
    type: 'AUTH_UPDATE',
    payload: reqAuth().patch('/auth', updates)
  };
}
