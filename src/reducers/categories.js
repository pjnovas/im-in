import {
  EVENT_CATS_PENDING,
  EVENT_CATS_FULFILLED,
  EVENT_CATS_REJECTED
} from '../constants';

const initialState = {
  fetching: false,
  fetched: false,
  list: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case EVENT_CATS_PENDING: {
      return {...state, fetching: true };
    }
    case EVENT_CATS_FULFILLED: {
      return {...state, fetching: false, fetched: true, list: action.payload.data};
    }
    case EVENT_CATS_REJECTED: {
      return {...state, fetching: false, error: action.payload.response.data};
    }
  }

  return state;
}
