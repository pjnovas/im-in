import {
  CREATE_MEETING_PENDING,
  CREATE_MEETING_FULFILLED,
  CREATE_MEETING_REJECTED
} from '../constants';

const initialState = {
  creating: false,
  created: false,
  createdId: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_MEETING_PENDING: {
      return {...state, creating: true};
    }
    case CREATE_MEETING_FULFILLED: {
      return {...state, creating: false, created: true, createdId: action.payload.data.id};
    }
    case CREATE_MEETING_REJECTED: {
      return {...state, creating: false, error: action.payload.response.data};
    }
  }

  return state;
}
