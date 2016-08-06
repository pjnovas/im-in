import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import {reducer as form} from 'redux-form';
import match from './match';

export default combineReducers({
  routing,
  form,
  match
});
