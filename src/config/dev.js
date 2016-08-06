'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',
  apiURL: 'http://localhost:1337'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
