import {
  EVENT_CREATE_PENDING,
  EVENT_CREATE_FULFILLED,
  EVENT_CREATE_REJECTED,
  EVENT_FETCH_PENDING,
  EVENT_FETCH_FULFILLED,
  EVENT_FETCH_REJECTED
} from '../constants';

const initialState = {
  creating: false,
  created: false,
  createdId: null,
  fetching: false,
  fetched: false,
  event: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case EVENT_CREATE_PENDING: {
      return {...state, creating: true};
    }
    case EVENT_CREATE_FULFILLED: {
      return {...state, creating: false, created: true, createdId: action.payload.data.id};
    }
    case EVENT_CREATE_REJECTED: {
      return {...state, creating: false, error: action.payload.response.data};
    }
    case EVENT_FETCH_PENDING: {
      return {...state, fetching: true };
    }
    case EVENT_FETCH_FULFILLED: {
      return {...state, fetching: false, fetched: true, event: action.payload.data};
    }
    case EVENT_FETCH_REJECTED: {
      return {...state, fetching: false, error: action.payload.response.data};
    }
  }

  return state;
}
