import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import {reducer as form} from 'redux-form';
import event from './event';
import auth from './auth';

export default combineReducers({
  routing,
  form,
  event,
  auth
});
