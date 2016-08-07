import {
  CREATE_EVENT_PENDING,
  CREATE_EVENT_FULFILLED,
  CREATE_EVENT_REJECTED
} from '../constants';

const initialState = {
  creating: false,
  created: false,
  createdId: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_EVENT_PENDING: {
      return {...state, creating: true};
    }
    case CREATE_EVENT_FULFILLED: {
      return {...state, creating: false, created: true, createdId: action.payload.data.id};
    }
    case CREATE_EVENT_REJECTED: {
      return {...state, creating: false, error: action.payload.response.data};
    }
  }

  return state;
}
