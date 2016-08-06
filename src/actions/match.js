import { CREATE_MATCH } from './constants';

module.exports = function(parameter) {
  return { type: CREATE_MATCH, parameter };
};
