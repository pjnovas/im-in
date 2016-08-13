import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,

  AUTH_SEND_TOKEN_PENDING,
  AUTH_SEND_TOKEN_FULFILLED,
  AUTH_SEND_TOKEN_REJECTED,

  AUTH_LOGOUT_PENDING,
  AUTH_LOGOUT_FULFILLED,
  AUTH_LOGOUT_REJECTED,

  AUTH_UPDATE_PENDING,
  AUTH_UPDATE_FULFILLED,
  AUTH_UPDATE_REJECTED
} from '../constants';

const initialState = {
  user: null,
  loggingIn: false,
  loggedIn: false,
  loggingOut: false,
  tokenRequesting: false,
  tokenRequested: false,
  saving: false,
  saved: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case AUTH_LOGIN_PENDING: {
      return {...state, loggingIn: true};
    }
    case AUTH_LOGIN_FULFILLED: {
      return {...state, loggingIn: false, loggedIn: true, user: action.payload.data};
    }
    case AUTH_LOGIN_REJECTED: {
      return {...state, loggingIn: false, error: action.payload.response.data};
    }
    case AUTH_SEND_TOKEN_PENDING: {
      return {...state, tokenRequesting: true };
    }
    case AUTH_SEND_TOKEN_FULFILLED: {
      return {...state, tokenRequesting: false, tokenRequested: true, loggedIn: false, user: null};
    }
    case AUTH_SEND_TOKEN_REJECTED: {
      return {...state, tokenRequesting: false, error: action.payload.response.data};
    }
    case AUTH_LOGOUT_PENDING: {
      return {...state, loggingOut: true };
    }
    case AUTH_LOGOUT_FULFILLED: {
      return {...state, loggingOut: false, loggedIn: false, user: null};
    }
    case AUTH_LOGOUT_REJECTED: {
      return {...state, loggingOut: false, error: action.payload.response.data};
    }
    case AUTH_UPDATE_PENDING: {
      return {...state, saving: true };
    }
    case AUTH_UPDATE_FULFILLED: {
      return {...state, saving: false, saved: true, user: action.payload.data};
    }
    case AUTH_UPDATE_REJECTED: {
      return {...state, saving: false, error: action.payload.response.data};
    }
  }

  return state;
}
