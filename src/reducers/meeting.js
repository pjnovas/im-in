import {
  CREATE_MEETING_PENDING,
  CREATE_MEETING_FULFILLED,
  CREATE_MEETING_REJECTED
} from '../constants';

const initialState = {
  meeting: {},
  creating: false,
  created: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_MEETING_PENDING: {
      return {...state, creating: true};
    }
    case CREATE_MEETING_FULFILLED: {
      return {...state,
        creating: false, created: true, meeting: action.payload.data};
    }
    case CREATE_MEETING_REJECTED: {
      return {...state, creating: false, error: action.payload.response.data};
    }
  }

  return state;
}
